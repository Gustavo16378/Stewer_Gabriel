import { useState, useEffect } from 'react'

const links = [
  { label: 'Quem é',      href: '#sobre' },
  { label: 'Serviços',    href: '#servicos' },
  { label: 'Consultoria', href: '#consultoria' },
  { label: 'Portfólio',   href: '#portfolio' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-carbon/95 backdrop-blur-md border-b border-wire/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" aria-label="Stewer Gabriel" className="group flex items-center gap-2">
          <img
            src="./photos/logo1.png"
            alt=""
            className="h-16 w-auto object-contain"
          />
          <span className="font-serif text-cream text-lg leading-tight tracking-wide group-hover:text-gold transition-colors duration-300">
            Stewer Gabriel
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sand text-[11px] tracking-ultra uppercase hover:text-cream transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-[11px] tracking-ultra uppercase text-gold border border-gold/50 px-5 py-2 hover:bg-gold hover:text-carbon transition-all duration-300"
          >
            Agende
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-cream transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-72 border-b border-wire/20' : 'max-h-0'
        } bg-carbon/98 backdrop-blur-md`}
      >
        <nav className="px-8 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sand text-xs tracking-ultra uppercase hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="text-gold text-xs tracking-ultra uppercase border-b border-gold/40 pb-1 w-fit hover:text-cream hover:border-cream transition-colors"
          >
            Agendar consultoria
          </a>
        </nav>
      </div>
    </header>
  )
}
