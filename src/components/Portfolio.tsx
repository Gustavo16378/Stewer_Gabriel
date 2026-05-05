import { useEffect, useState, useRef, useCallback } from 'react'

interface Manifest {
  images: string[]
  videos: string[]
}

type MediaItem = { type: 'image'; src: string } | { type: 'video'; src: string }

function interleave(images: string[], videos: string[]): MediaItem[] {
  const items: MediaItem[] = []
  const imgs = images.map(f => ({ type: 'image' as const, src: `/portifolioImgs/${f}` }))
  const vids = videos.map(f => ({ type: 'video' as const, src: `/videosImgs/${f}` }))
  const max = Math.max(imgs.length, vids.length)
  for (let i = 0; i < max; i++) {
    if (imgs[i]) items.push(imgs[i])
    if (vids[i]) items.push(vids[i])
  }
  return items
}

function VideoTile({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { entry.isIntersecting ? el.play() : el.pause() },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
    />
  )
}

function Lightbox({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-carbon/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-sand hover:text-cream transition-colors z-10"
        aria-label="Fechar"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>

      {/* Media — stop propagation so clicking it doesn't close */}
      <div
        className="max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        {item.type === 'image' ? (
          <img
            src={item.src}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
          />
        ) : (
          <video
            src={item.src}
            autoPlay
            controls
            playsInline
            className="max-w-full max-h-[90vh]"
          />
        )}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [items, setItems] = useState<MediaItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const [selected, setSelected] = useState<MediaItem | null>(null)

  useEffect(() => {
    fetch('/portfolio-manifest.json')
      .then(r => r.json())
      .then((m: Manifest) => {
        setItems(interleave(m.images, m.videos))
        setLoaded(true)
      })
      .catch(() => setLoaded(true))
  }, [])

  useEffect(() => {
    if (items.length === 0) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('#portfolio .fade-up').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [items])

  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="portfolio" className="py-32 lg:py-44 px-8 lg:px-12 bg-carbon">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
          <div className="fade-up">
            <p className="text-sand text-[10px] tracking-ultra uppercase">Trabalhos</p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-cream">Portfólio</h2>
            <div className="mt-5 w-10 h-px bg-gold" />
          </div>
          <a
            href="https://www.instagram.com/stewer.gabriel"
            target="_blank"
            rel="noreferrer"
            className="text-sand text-[10px] tracking-ultra uppercase hover:text-cream transition-colors self-start sm:self-end border-b border-wire/50 pb-1 hover:border-cream fade-up"
          >
            Ver no Instagram →
          </a>
        </div>

        {/* Gallery */}
        {loaded && items.length === 0 ? (
          <p className="text-wire text-sm text-center py-20 tracking-wide">
            Em breve — novos trabalhos chegando.
          </p>
        ) : (
          <div className="columns-2 lg:columns-3 gap-3 [&>*]:mb-3">
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelected(item)}
                className="break-inside-avoid overflow-hidden group cursor-pointer relative fade-up"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <VideoTile src={item.src} />
                )}

                {/* Play icon hint for videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-carbon/60 backdrop-blur-sm flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-cream translate-x-0.5">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center fade-up">
          <a
            href="https://www.instagram.com/stewer.gabriel"
            target="_blank"
            rel="noreferrer"
            className="inline-block text-[11px] tracking-ultra uppercase text-gold border border-gold/50 px-10 py-4 hover:bg-gold hover:text-carbon transition-all duration-300"
          >
            Ver galeria completa
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selected && <Lightbox item={selected} onClose={close} />}
    </section>
  )
}
