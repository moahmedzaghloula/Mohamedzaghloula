import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Toolbox from './sections/Toolbox'
import Projects from './sections/Projects'
import DeliveryLoop from './sections/DeliveryLoop'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-0 text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Toolbox />
        <Projects />
        <DeliveryLoop />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
