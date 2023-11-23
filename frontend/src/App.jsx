import './App.css'
import Navbar from './components/Navbar/Navbar'
import Presentation from './components/Landing/Presentation/Presentation'
import Skills from './components/Landing/Skills/Skills.jsx'
import Proyects from './components/Landing/Proyects/Proyects'
import Footer from './components/Footer/Footer'
import ContactMe from './components/Landing/ContacMe/ContactMe'
import AboutMe from './components/Landing/AboutMe/AboutMe'
import Certification from './components/Landing/Certification/Certification.jsx'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Presentation />
        <Skills />
        <AboutMe />
        <Proyects />
        <Certification/>
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default App
