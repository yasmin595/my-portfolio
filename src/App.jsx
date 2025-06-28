
import { useEffect } from 'react';
import './App.css'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Footer from './Components/Footer';




function App() {
useEffect(() => {
  AOS.init({ duration: 800, once: true });
}, []);

  return (
    < >
   <div className='w-11/12 mx-auto '></div>
     <Navbar></Navbar>
     <Banner></Banner>
     <About></About>
     <Skills></Skills>
     <Projects></Projects>
     <Education></Education>
     <Contact></Contact>
     <Footer></Footer>
    
    </>
  )
}

export default App
