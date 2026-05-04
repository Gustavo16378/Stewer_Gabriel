const itens = [
  {
    titulo: 'Análise de Visagismo',
    desc: 'Leitura do formato do rosto, expressões e traços marcantes para definir o corte e estilo que harmonizam com a sua identidade.',
  },
  {
    titulo: 'Tipo Físico & Proporções',
    desc: 'Estudo do biotipo, porte e postura para criar um visual que valorize sua silhueta e transmita a mensagem certa.',
  },
  {
    titulo: 'Estilo & Guarda-roupa',
    desc: 'Orientação de cores, modelagens e combinações que comunicam autoridade e autenticidade no seu cotidiano.',
  },
  {
    titulo: 'Posicionamento de Imagem',
    desc: 'Alinhamento entre aparência, presença e objetivos — seja no ambiente profissional, social ou digital.',
  },
]

export default function Consultoria() {
  return (
    <section id="consultoria" className="py-32 lg:py-44 px-8 lg:px-12 bg-carbon">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-end mb-20">
          <div>
            <p className="text-sand text-[10px] tracking-ultra uppercase fade-up">Consultoria</p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,3.75rem)] text-cream leading-tight fade-up fade-up-d1">
              Uma transformação<br />completa de imagem
            </h2>
            <div className="mt-6 w-10 h-px bg-gold fade-up fade-up-d2" />
          </div>
          <p className="text-ivory text-[15px] leading-relaxed fade-up fade-up-d2">
            A Consultoria de Imagem vai muito além do corte. É um processo profundo de autoconhecimento e reposicionamento visual — construindo uma presença que comunica exatamente quem você é e onde quer chegar.
          </p>
        </div>

        {/* Itens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-wire/20">
          {itens.map((item, i) => (
            <div
              key={item.titulo}
              className="bg-carbon p-10 lg:p-12 fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className="font-serif text-gold/30 text-4xl leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 font-serif text-xl text-cream">{item.titulo}</h3>
              <div className="mt-3 w-6 h-px bg-wire" />
              <p className="mt-5 text-ivory text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-8 fade-up">
          <a
            href="#contato"
            className="text-[11px] tracking-ultra uppercase text-gold border border-gold/60 px-10 py-4 hover:bg-gold hover:text-carbon transition-all duration-300"
          >
            Agende sua consultoria
          </a>
          <p className="text-sand text-xs tracking-[0.08em] max-w-xs">
            Atendimento exclusivo e personalizado, mediante agendamento em Palmas, TO.
          </p>
        </div>

      </div>
    </section>
  )
}
