
import Home from "../components/Home";
import About from "../components/About";
import Contact from '../components/contact'
import { useEffect } from "react";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";

// import Svg from '../assets/svg/Svg'

function LandingPages(){
    useEffect(()=>{
        document.title = "welcome to my Portfolio"
        
      },[])
    return (
    <div>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
    )
}
export default LandingPages