import './App.css'
import Navbar from './components/Navbar/Navbar'
import Presentation from './components/Landing/Presentation/Presentation'
import Skills from './components/Landing/Skills/Skills.jsx'
import Proyects from './components/Landing/Proyects/Proyects'
import Footer from './components/Footer/Footer'
import ContactMe from './components/Landing/ContacMe/ContactMe'
import AboutMe from './components/Landing/AboutMe/AboutMe'
import Certification from './components/Landing/Certification/Certification.jsx'
import ash from "./assets/characters/ash.png";
import batman from "./assets/characters/batman.png";
import darthvader from "./assets/characters/darthvader.png";
import donald from "./assets/characters/donald.png";
import homer from "./assets/characters/homer.png";
import indiana from "./assets/characters/indiana.png";
import kratos from "./assets/characters/kratos.png";
import mario from "./assets/characters/mario.png";
import sonic from "./assets/characters/sonic.png";
import subzero from "./assets/characters/subzero.png";
import { useState } from 'react'


function App() {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const characters = [
    { hidingIn: "Creative", name: "Ash Ketchum", img: ash },
    { hidingIn: "Franco", name: "Batman", img: batman },
    { hidingIn: "C", name: "Darth Vader", img: darthvader },
    { hidingIn: "s", name: "Donald Duck", img: donald },
    { hidingIn: "Creativity", name: "Homer Simpson", img: homer },
    { hidingIn: "5", name: "Indiana Jones", img: indiana },
    { hidingIn: "!", name: "Kratos", img: kratos },
    { hidingIn: "2D", name: "Mario Bross", img: mario },
    { hidingIn: "games", name: "Sonic", img: sonic },
    { hidingIn: "characters", name: "Sub-Zero", img: subzero },
  ]

  const handleCharacterSelected = (characterHidingIn) => {
    const selectedCharacter = characters.find((character) => character.hidingIn === characterHidingIn);
    if (!selectedCharacters.some((char) => char.hidingIn === selectedCharacter.hidingIn)) {
      setSelectedCharacters((prevSelected) => [...prevSelected, selectedCharacter]);
    }
  };


  return (
    <>
      <Navbar unlockedCharacters={selectedCharacters} onCharacterUnlock={handleCharacterSelected}/>
      <Presentation onCharacterUnlock={handleCharacterSelected}/>
      <Skills onCharacterUnlock={handleCharacterSelected}/>
      <AboutMe onCharacterUnlock={handleCharacterSelected}/>
      <Proyects onCharacterUnlock={handleCharacterSelected}/>
      <Certification onCharacterUnlock={handleCharacterSelected}/>
      <ContactMe onCharacterUnlock={handleCharacterSelected} />
      <Footer onCharacterUnlock={handleCharacterSelected}/>
    </>
  )
}

export default App
