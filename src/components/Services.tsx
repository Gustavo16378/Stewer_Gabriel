const services = [
  {
    num: '01',
    title: 'Corte',
    body: 'Cada corte é cuidadosamente personalizado ao formato do rosto, ao estilo de vida e à identidade de quem está na cadeira. Precisão técnica com olhar artístico.',
  },
  {
    num: '02',
    title: 'Visagismo',
    body: 'A ciência e a arte de criar harmonia entre o visual e as características físicas e psicológicas de cada homem. Muito além da estética — é identidade expressa.',
  },
  {
    num: '03',
    title: 'Consultoria de Imagem',
    body: 'Uma análise completa da imagem pessoal: do corte ao guarda-roupa, da postura ao posicionamento. Para homens que querem se comunicar com excelência em qualquer ambiente.',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-32 lg:py-44 px-8 lg:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 fade-up">
          <p className="text-sand text-[10px] tracking-ultra uppercase">O que faz</p>
          <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,3.5rem)] text-cream">Serviços</h2>
          <div className="mt-5 w-10 h-px bg-gold" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-wire/30 border border-wire/30">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`p-10 lg:p-14 flex flex-col fade-up`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="font-serif text-5xl text-gold/30 leading-none select-none">
                {s.num}
              </span>

              <h3 className="mt-6 font-serif text-2xl text-cream">{s.title}</h3>

              <div className="mt-4 w-7 h-px bg-wire" />

              <p className="mt-6 text-ivory text-sm leading-relaxed flex-1">{s.body}</p>

              <a
                href="#contato"
                className="mt-10 inline-flex items-center gap-3 text-sand text-[10px] tracking-ultra uppercase hover:text-cream transition-colors duration-300 group w-fit"
              >
                Entre em contato
                <span className="block w-5 h-px bg-sand group-hover:bg-cream group-hover:w-8 transition-all duration-300" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-16 text-center text-sand text-xs tracking-[0.1em] fade-up">
          Atendimento mediante agendamento &mdash; exclusivo e personalizado
        </p>
      </div>
    </section>
  )
}
