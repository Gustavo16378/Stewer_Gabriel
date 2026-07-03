import { useEffect } from 'react'
import Nav         from './components/Nav'
import Hero        from './components/Hero'
import About       from './components/About'
import Services    from './components/Services'
import Consultoria from './components/Consultoria'
import Instrutor   from './components/Instrutor'
import Portfolio   from './components/Portfolio'
import Location    from './components/Location'
import Contact     from './components/Contact'

export default function App() {
  /* Fade-up on scroll — drives all .fade-up elements */
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px 12% 0px' },
    )

    document.querySelectorAll('.fade-up').forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [])

  return (
    <div className="font-sans bg-carbon text-cream antialiased">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Consultoria />
      <Instrutor />
      <Portfolio />
      <Location />
      <Contact />
    </div>
  )
}
