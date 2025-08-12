import { useState } from 'react'

import './App.css'
 
import "./components/About.scss";
 import "./components/OurFocus";
import "./components/OurTeam.scss";
import "./components/Benefits.scss";
import "./components/Investment.scss";

import About from "./components/About";
import OurFocus from "./components/OurFocus";
import Benefits from "./components/Benefits";
import Investment from "./components/Investment";
import OurTeam from "./components/OurTeam";


function App() {
  return (
    <div>
      <About/>
       <OurFocus />  
      <Benefits/> 
      <Investment/> 
        <OurTeam/> 
    </div>
  );
}

export default App;
