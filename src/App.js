
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Resume from './Components/Resume/Resume'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
     <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>
       
      <section id="skills">
        <Skills />
      </section>

       <Resume/>

      <section id="services">
        <Services />
      </section>

      <Portfolio/>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
      
    </div>
  );
}

export default App;
