export default function About() {
  return (
    <section id="sobre" className="py-32 lg:py-44 px-8 lg:px-12 bg-carbon">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

          {/* Photo column */}
          <div className="relative fade-up">
            {/*
              Replace the div below with:
                <img src="/photos/about.jpg" alt="Stewer Gabriel" className="w-full object-cover" />
            */}
            <div className="aspect-[3/4] w-full bg-gradient-to-br from-graphite via-[#1c1c1c] to-graphite" />

            {/* Decorative frame offset */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-gold/20 pointer-events-none" />
            <div className="absolute -top-5 -left-5 w-14 h-14 border border-wire/40 pointer-events-none" />

            {/* Caption tag */}
            <div className="absolute bottom-8 left-0 -translate-x-0 bg-carbon/90 backdrop-blur-sm px-5 py-3 border-l-2 border-gold">
              <p className="text-gold text-[10px] tracking-ultra uppercase">Palmas, TO</p>
              <p className="text-cream text-xs mt-0.5">Visagista & Consultor de Imagem</p>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="text-sand text-[10px] tracking-ultra uppercase fade-up">Quem é</p>

            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-cream leading-tight fade-up fade-up-d1">
              Por trás do visual,<br />uma visão
            </h2>

            <div className="mt-6 w-10 h-px bg-gold fade-up fade-up-d2" />

            <p className="mt-8 text-ivory leading-relaxed text-[15px] fade-up fade-up-d2">
              Stewer Gabriel é visagista e consultor de imagem masculina baseado em Palmas, TO.
              Com anos de experiência transformando a aparência e a autoestima de homens, ele une
              técnica, estética e psicologia para criar looks que comunicam autoridade,
              autenticidade e confiança.
            </p>

            <p className="mt-5 text-ivory leading-relaxed text-[15px] fade-up fade-up-d3">
              Para Stewer, um bom corte vai muito além das tesouras. É a leitura do rosto,
              do comportamento, do objetivo de vida. Cada cliente é único — e merece um visual
              que reflita exatamente quem ele é e onde quer chegar.
            </p>

            <blockquote className="mt-10 border-l-2 border-gold pl-6 fade-up fade-up-d4">
              <p className="font-serif text-xl text-cream italic leading-relaxed">
                "Sua aparência é o primeiro discurso que você faz — antes mesmo de abrir a boca."
              </p>
            </blockquote>

            <div className="mt-12 flex items-center gap-8 fade-up fade-up-d4">
              <div>
                <p className="font-serif text-3xl text-cream">+500</p>
                <p className="text-sand text-[10px] tracking-ultra uppercase mt-1">Clientes atendidos</p>
              </div>
              <div className="w-px h-10 bg-wire" />
              <div>
                <p className="font-serif text-3xl text-cream">5+</p>
                <p className="text-sand text-[10px] tracking-ultra uppercase mt-1">Anos de experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
