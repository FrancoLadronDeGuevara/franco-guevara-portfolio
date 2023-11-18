import './App.css'
import Navbar from './components/Navbar/Navbar'
import Presentation from './components/Landing/Presentation/Presentation'
import Skills from './components/Landing/Skills/Skills'
import Proyects from './components/Landing/Proyects/Proyects'
import Footer from './components/Footer/Footer'
import ContactMe from './components/Landing/ContacMe/ContactMe'
import AboutMe from './components/Landing/AboutMe/AboutMe'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Presentation />
        <Skills />
        <AboutMe />
        <Proyects />
        <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default App
