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
    <section id="consultoria" className="py-24 sm:py-32 lg:py-44 px-6 sm:px-8 lg:px-12 bg-carbon">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 lg:items-end mb-14 sm:mb-20">
          <div>
            <p className="text-sand text-[10px] tracking-ultra uppercase fade-up">Consultoria</p>
            <h2 className="mt-4 font-serif text-[clamp(2.25rem,6vw,3.75rem)] text-cream leading-[1.1] fade-up fade-up-d1">
              Uma transformação <br className="hidden sm:block" />completa de imagem
            </h2>
            <div className="mt-6 w-10 h-px bg-gold fade-up fade-up-d2" />
          </div>
          <p className="text-ivory text-[15px] leading-relaxed fade-up fade-up-d2">
            A Consultoria de Imagem vai muito além do corte. É um processo profundo de autoconhecimento e reposicionamento visual — construindo uma presença que comunica exatamente quem você é e onde quer chegar.
          </p>
        </div>

        {/* Itens — índice editorial (título à esquerda, descrição à direita) */}
        <div className="border-t border-wire/20">
          {itens.map((item, i) => (
            <div
              key={item.titulo}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-10 py-8 lg:py-10 border-b border-wire/20 items-baseline fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="md:col-span-5 flex items-baseline gap-4">
                <span className="hidden md:block w-6 h-px bg-gold/50 translate-y-[-0.35em]" />
                <h3 className="font-serif text-xl lg:text-2xl text-cream">{item.titulo}</h3>
              </div>
              <p className="md:col-span-7 text-ivory text-sm sm:text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 fade-up">
          <a
            href="#contato"
            className="self-start text-[11px] tracking-ultra uppercase text-gold border border-gold/60 px-10 py-4 hover:bg-gold hover:text-carbon transition-all duration-300"
          >
            Agende sua consultoria
          </a>
          <p className="text-sand text-xs tracking-[0.08em] max-w-xs leading-relaxed">
            Atendimento exclusivo e personalizado, mediante agendamento em Palmas, TO.
          </p>
        </div>

      </div>
    </section>
  )
}
