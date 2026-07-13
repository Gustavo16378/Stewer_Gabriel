import { MediaGallery, useManifest } from './gallery'

const topicos = [
  {
    titulo: 'Técnicas de Corte',
    desc: 'Domínio de tesoura, navalha e máquina com precisão, ritmo e acabamento autoral.',
  },
  {
    titulo: 'Visagismo Aplicado',
    desc: 'Ler o formato do rosto e os traços, traduzindo em cortes que harmonizam identidade e estética.',
  },
  {
    titulo: 'Fundamentos & Ferramentas',
    desc: 'Base sólida, postura profissional e uso correto do ferramental para um resultado consistente.',
  },
  {
    titulo: 'Mentoria Individual',
    desc: 'Acompanhamento próximo e personalizado para acelerar a evolução de quem já atua.',
  },
]

export default function Instrutor() {
  const { items } = useManifest('/instrutor-manifest.json', '/instrutorImgs', '/instrutorVideos')

  return (
    <section id="instrutor" className="py-24 sm:py-32 lg:py-44 px-6 sm:px-8 lg:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-28 lg:items-end mb-14 sm:mb-20">
          <div>
            <p className="text-sand text-[10px] tracking-ultra uppercase fade-up">Ensino</p>
            <h2 className="mt-4 font-serif text-[clamp(2.25rem,7vw,3.75rem)] text-cream leading-[1.1] fade-up fade-up-d1">
              Ensino a arte do <br className="hidden sm:block" />corte e do visagismo
            </h2>
            <div className="mt-6 w-10 h-px bg-gold fade-up fade-up-d2" />
          </div>
          <p className="text-ivory text-[15px] leading-relaxed fade-up fade-up-d2">
            Mais do que atender, Stewer forma. Compartilha em aulas e mentorias o mesmo método que aplica na cadeira — unindo técnica apurada e visagismo para que outros profissionais desenvolvam mão, olhar e identidade próprios.
          </p>
        </div>

        {/* O que se aprende — sem numeração, acento dourado à esquerda */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-9 mb-16 sm:mb-20">
          {topicos.map((t, i) => (
            <div
              key={t.titulo}
              className="border-l border-gold/40 pl-5 fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <h3 className="font-serif text-lg text-cream">{t.titulo}</h3>
              <p className="mt-2 text-ivory text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Galeria */}
        <div className="mb-14 sm:mb-16 fade-up">
          <p className="text-sand text-[10px] tracking-ultra uppercase mb-6 sm:mb-8">Bastidores das aulas</p>
          <MediaGallery items={items} layout="grid" />
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 fade-up">
          <a
            href="#contato"
            className="self-start text-[11px] tracking-ultra uppercase text-gold border border-gold/60 px-10 py-4 hover:bg-gold hover:text-carbon transition-all duration-300"
          >
            Quero aprender
          </a>
          <p className="text-sand text-xs tracking-[0.08em] max-w-xs leading-relaxed">
            Aulas e mentorias individuais mediante agendamento em Palmas, TO.
          </p>
        </div>

      </div>
    </section>
  )
}
