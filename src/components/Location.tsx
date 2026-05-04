export default function Location() {
  return (
    <section id="onde-atende" className="py-32 lg:py-44 px-8 lg:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="text-sand text-[10px] tracking-ultra uppercase fade-up">Onde atende</p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-cream leading-tight fade-up fade-up-d1">
              Palmas,<br />Tocantins
            </h2>
            <div className="mt-6 w-10 h-px bg-gold fade-up fade-up-d2" />

            <div className="mt-10 space-y-8 fade-up fade-up-d2">
              <div>
                <p className="text-sand text-[10px] tracking-ultra uppercase mb-2">Cidade</p>
                <p className="text-cream text-[15px]">Palmas — TO, Brasil</p>
              </div>
              <div className="w-full h-px bg-wire/30" />
              <div>
                <p className="text-sand text-[10px] tracking-ultra uppercase mb-2">Atendimento</p>
                <p className="text-cream text-[15px]">Mediante agendamento</p>
              </div>
              <div className="w-full h-px bg-wire/30" />
              <div>
                <p className="text-sand text-[10px] tracking-ultra uppercase mb-2">Horário</p>
                <p className="text-cream text-[15px]">Seg — Sáb, 9h às 19h</p>
              </div>
            </div>

            <a
              href="#contato"
              className="mt-12 inline-flex items-center gap-3 text-gold text-[10px] tracking-ultra uppercase border-b border-gold/50 pb-1 hover:text-cream hover:border-cream transition-all fade-up fade-up-d3"
            >
              Agendar agora
              <span className="w-5 h-px bg-current" />
            </a>
          </div>

          {/* Map placeholder */}
          <div className="order-1 lg:order-2 fade-up fade-up-d1">
            <div className="relative aspect-[4/3] bg-graphite flex items-center justify-center overflow-hidden">
              {/*
                Replace with an embedded Google Map or a real photo of the location:
                  <iframe
                    src="https://www.google.com/maps/embed?..."
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                  />
              */}
              <div className="flex flex-col items-center gap-4 text-wire">
                {/* Pin icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <p className="text-[10px] tracking-ultra uppercase">Palmas, TO</p>
              </div>
              <div className="absolute inset-0 border border-wire/20 pointer-events-none" />
            </div>

            {/* Decorative offset frame */}
            <div className="absolute -z-0 w-16 h-16 border border-gold/15 translate-x-6 -translate-y-6 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
