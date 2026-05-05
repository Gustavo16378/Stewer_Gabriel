export default function Location() {
  return (
    <section id="onde-atende" className="py-32 lg:py-44 px-8 lg:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="text-sand text-[10px] tracking-ultra uppercase fade-up">Onde atende</p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-cream leading-tight fade-up fade-up-d1">
              Boss House<br />Barbearia
            </h2>
            <div className="mt-6 w-10 h-px bg-gold fade-up fade-up-d2" />

            <div className="mt-10 space-y-8 fade-up fade-up-d2">
              <div>
                <p className="text-sand text-[10px] tracking-ultra uppercase mb-2">Local</p>
                <p className="text-cream text-[15px]">Boss House Barbearia — Palmas, TO</p>
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

          {/* Map */}
          <div className="order-1 lg:order-2 fade-up fade-up-d1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.9771663621927!2d-48.3314691230779!3d-10.18250951000104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb1533fc1fb9%3A0x208eb57c94a8c631!2sBoss%20House%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1777939367414!5m2!1spt-BR!2sbr"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Boss House Barbearia"
              />
              <div className="absolute inset-0 border border-wire/20 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
