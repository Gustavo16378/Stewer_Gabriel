import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

/* Boss House Barbearia — Palmas, TO (coords from the venue's Google Maps pin) */
const LAT = -10.18256053
const LNG = -48.32910908
const COORDS = '10°10\'57"S · 48°19\'45"W'
const ROTA = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`
const GMAPS = 'https://www.google.com/maps/search/?api=1&query=Boss%20House%20Barbearia%2C%20Palmas%20-%20TO'

export default function Location() {
  const mapEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapEl.current) return

    const map = L.map(mapEl.current, {
      center: [LAT, LNG],
      zoom: 15,
      zoomControl: false,
      scrollWheelZoom: false,
      attributionControl: false,
    })

    // CARTO dark basemap (OpenStreetMap data)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map)

    // Prominent gold teardrop pin (tip = exact location), pulsing halo + label
    const icon = L.divIcon({
      className: 'boss-marker',
      html:
        '<span class="boss-ping"></span>' +
        '<svg class="boss-pin" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 0C5.37 0 0 5.37 0 12c0 8.5 12 22 12 22s12-13.5 12-22C24 5.37 18.63 0 12 0z" fill="#c4a882"/>' +
        '<circle cx="12" cy="12" r="4.5" fill="#0c0c0c"/></svg>' +
        '<span class="boss-label">Boss House Barbearia</span>',
      iconSize: [28, 40],
      iconAnchor: [14, 40],
    })
    L.marker([LAT, LNG], { icon }).addTo(map)

    L.control.zoom({ position: 'topright' }).addTo(map)
    L.control
      .attribution({ position: 'bottomright', prefix: false })
      .addAttribution('Mapa © OpenStreetMap · © CARTO')
      .addTo(map)

    // Entrance animation — fly in the first time the section is seen
    // (respects prefers-reduced-motion)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let played = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played) {
          played = true
          if (reduce) map.setView([LAT, LNG], 16.5)
          else map.flyTo([LAT, LNG], 16.5, { duration: 1.8, easeLinearity: 0.2 })
        }
      },
      { threshold: 0.2 }
    )
    io.observe(mapEl.current)

    return () => {
      io.disconnect()
      map.remove()
    }
  }, [])

  return (
    <section id="onde-atende" className="relative bg-carbon">
      {/* Section label — top left over the map */}
      <div className="absolute top-8 left-6 lg:left-12 z-[20] flex items-center gap-4">
        <span className="w-8 h-px bg-gold" />
        <p className="text-sand text-[10px] tracking-ultra uppercase">Onde atende · Como chegar</p>
      </div>

      {/* Coordinates — top right */}
      <p className="absolute top-8 right-20 lg:right-24 z-[20] hidden sm:block text-sand text-[10px] tracking-[0.2em] uppercase">
        {COORDS}
      </p>

      {/* Map — relative z-0 creates a stacking context so Leaflet's internal
          panes/controls stay below the overlay card (which sits at z-20). */}
      <div
        ref={mapEl}
        className="relative z-0 h-[58vh] min-h-[440px] sm:h-[82vh] sm:min-h-[600px] w-full"
        aria-label="Mapa — Boss House Barbearia"
      />

      {/* Info card — flows BELOW the map on mobile (never covers the pin),
          overlays bottom-left from sm up. */}
      <div className="relative m-4 sm:m-0 sm:absolute sm:bottom-12 sm:left-12 sm:right-auto z-[20] w-auto sm:w-[26rem] border border-wire/40 bg-carbon sm:bg-carbon/90 sm:backdrop-blur-md p-8 sm:p-10">
        <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.08] text-cream">
          Boss House<br />Barbearia
        </h2>

        <p className="mt-4 text-ivory text-[13px] leading-relaxed">
          Q. ACNE 1, Rua NE 3, Nº 15<br />
          Plano Diretor Norte · Palmas — TO
        </p>

        <div className="my-6 w-full h-px bg-wire/40" />

        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="text-sand text-[10px] tracking-ultra uppercase">Horário</p>
            <p className="mt-2 text-cream text-[13px] leading-snug">Seg — Sáb<br />9h às 19h</p>
          </div>
          <div>
            <p className="text-sand text-[10px] tracking-ultra uppercase">Atendimento</p>
            <p className="mt-2 text-cream text-[13px] leading-snug">Mediante<br />agendamento</p>
          </div>
        </div>

        <div className="my-6 w-full h-px bg-wire/40" />

        <a
          href="tel:+5563985116783"
          className="inline-block py-1 -my-1 text-cream text-[15px] tracking-wide hover:text-gold transition-colors"
        >
          (63) 98511-6783
        </a>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <a
            href={ROTA}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-carbon text-[10px] tracking-ultra uppercase bg-gold px-6 py-3.5 hover:bg-cream transition-colors duration-300"
          >
            Traçar rota <span className="text-xs">↗</span>
          </a>
          <a
            href={GMAPS}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center text-gold text-[10px] tracking-ultra uppercase border border-gold/60 px-6 py-3.5 hover:bg-gold hover:text-carbon transition-all duration-300"
          >
            Ver no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
