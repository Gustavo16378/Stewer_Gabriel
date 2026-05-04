/* Placeholder heights simulate a real masonry gallery.
   Replace each inner div with an <img> when photos are ready. */
const items = [
  { h: 'h-80',  label: 'Corte clássico' },
  { h: 'h-56',  label: 'Fade + barba' },
  { h: 'h-72',  label: 'Visagismo' },
  { h: 'h-60',  label: 'Consultoria' },
  { h: 'h-96',  label: 'Transformação' },
  { h: 'h-64',  label: 'Estilo executivo' },
  { h: 'h-52',  label: 'Degradê' },
  { h: 'h-80',  label: 'Barba esculpida' },
  { h: 'h-56',  label: 'Corte moderno' },
]

export default function Portfolio() {
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

        {/* Masonry columns */}
        <div className="columns-2 lg:columns-3 gap-3 [&>*]:mb-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.h} w-full bg-graphite break-inside-avoid overflow-hidden group cursor-pointer relative fade-up`}
              style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
            >
              {/*
                Replace this placeholder div with:
                  <img
                    src={`/photos/portfolio-${i + 1}.jpg`}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
              */}
              <div className="w-full h-full bg-gradient-to-br from-graphite via-[#1c1c1c] to-[#161616] group-hover:from-[#252525] transition-all duration-500" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/50 transition-all duration-500 flex items-end p-5">
                <span className="text-cream text-xs tracking-[0.12em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

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
    </section>
  )
}
