import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  
  
  return (
    <div className="App">
   
      <div className="night">
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
  </div>
  <Navbar/>
  
         {//Welcome to my portfolio intro
}
    <div className="intro">
        <h1>
            Hello, I'm <span className="myName">Banele Nhlapo</span>.<br/> I'm a full stack web developer. 
        </h1>
        <a href="#about" className="knowMe">get to know me</a>
    </div>
    <About/>
    <Projects/>
    <Contact/>
     
    </div>
  );
}

export default App;
