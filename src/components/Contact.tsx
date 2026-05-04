export default function Contact() {
  return (
    <section id="contato" className="py-32 lg:py-44 px-8 lg:px-12 bg-carbon">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-sand text-[10px] tracking-ultra uppercase fade-up">Contato</p>

        <h2 className="mt-4 font-serif text-[clamp(3rem,8vw,6rem)] text-cream leading-tight fade-up fade-up-d1">
          Vamos<br />conversar?
        </h2>

        <div className="mt-6 w-10 h-px bg-gold mx-auto fade-up fade-up-d2" />

        <p className="mt-8 text-ivory text-lg leading-relaxed max-w-sm mx-auto font-light fade-up fade-up-d2">
          Pronto para transformar sua imagem? Dê o primeiro passo — o resto é comigo.
        </p>

        {/* CTA buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up fade-up-d3">
          <a
            href="https://wa.me/5563999999999?text=Olá%20Stewer%2C%20gostaria%20de%20agendar%20uma%20consultoria."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-12 py-4 bg-gold text-carbon text-[11px] tracking-ultra uppercase font-medium hover:bg-cream transition-colors duration-300 text-center"
          >
            WhatsApp
          </a>
          <a
            href="mailto:contato@stewergabriel.com"
            className="w-full sm:w-auto px-12 py-4 border border-wire/50 text-sand text-[11px] tracking-ultra uppercase hover:border-cream hover:text-cream transition-all duration-300 text-center"
          >
            E-mail
          </a>
        </div>

        {/* Social */}
        <div className="mt-10 flex items-center justify-center gap-2 fade-up fade-up-d4">
          <span className="text-sand text-[10px] tracking-ultra uppercase">Instagram</span>
          <span className="w-4 h-px bg-wire" />
          <a
            href="https://www.instagram.com/stewer.gabriel"
            target="_blank"
            rel="noreferrer"
            className="text-sand text-[10px] tracking-ultra uppercase hover:text-cream transition-colors"
          >
            @stewer.gabriel
          </a>
        </div>

        {/* Divider + footer */}
        <div className="mt-24 pt-8 border-t border-wire/20 fade-up">
          <p className="text-wire text-[10px] tracking-ultra uppercase">
            © {new Date().getFullYear()} Stewer Gabriel &mdash; Todos os direitos reservados
          </p>
        </div>
      </div>
    </section>
  )
}
