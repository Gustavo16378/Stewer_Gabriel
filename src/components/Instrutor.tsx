import { MediaGallery, useManifest } from './gallery'

const topicos = [
  {
    num: '01',
    titulo: 'Técnicas de Corte',
    desc: 'Domínio de tesoura, navalha e máquina com precisão, ritmo e acabamento autoral.',
  },
  {
    num: '02',
    titulo: 'Visagismo Aplicado',
    desc: 'Ler o formato do rosto e os traços, traduzindo em cortes que harmonizam identidade e estética.',
  },
  {
    num: '03',
    titulo: 'Fundamentos & Ferramentas',
    desc: 'Base sólida, postura profissional e uso correto do ferramental para um resultado consistente.',
  },
  {
    num: '04',
    titulo: 'Mentoria Individual',
    desc: 'Acompanhamento próximo e personalizado para acelerar a evolução de quem já atua.',
  },
]

export default function Instrutor() {
  const { items } = useManifest('/instrutor-manifest.json', '/instrutorImgs', '/instrutorVideos')

  return (
    <section id="instrutor" className="py-32 lg:py-44 px-8 lg:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-end mb-20">
          <div>
            <p className="text-sand text-[10px] tracking-ultra uppercase fade-up">Ensino</p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5vw,3.75rem)] text-cream leading-tight fade-up fade-up-d1">
              Ensino a arte do<br />corte e do visagismo
            </h2>
            <div className="mt-6 w-10 h-px bg-gold fade-up fade-up-d2" />
          </div>
          <p className="text-ivory text-[15px] leading-relaxed fade-up fade-up-d2">
            Mais do que atender, Stewer forma. Compartilha em aulas e mentorias o mesmo método que aplica na cadeira — unindo técnica apurada e visagismo para que outros profissionais desenvolvam mão, olhar e identidade próprios.
          </p>
        </div>

        {/* Tópicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-wire/20 mb-20">
          {topicos.map((t, i) => (
            <div
              key={t.num}
              className="bg-charcoal p-9 lg:p-10 fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="font-serif text-gold/30 text-4xl leading-none select-none">{t.num}</span>
              <h3 className="mt-5 font-serif text-lg text-cream">{t.titulo}</h3>
              <div className="mt-3 w-6 h-px bg-wire" />
              <p className="mt-5 text-ivory text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Galeria */}
        <div className="mb-16 fade-up">
          <p className="text-sand text-[10px] tracking-ultra uppercase mb-8">Bastidores das aulas</p>
          <MediaGallery items={items} />
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 fade-up">
          <a
            href="#contato"
            className="text-[11px] tracking-ultra uppercase text-gold border border-gold/60 px-10 py-4 hover:bg-gold hover:text-carbon transition-all duration-300"
          >
            Quero aprender
          </a>
          <p className="text-sand text-xs tracking-[0.08em] max-w-xs">
            Aulas e mentorias individuais mediante agendamento em Palmas, TO.
          </p>
        </div>

      </div>
    </section>
  )
}
