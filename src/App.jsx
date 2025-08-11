import { useState } from 'react'

import './App.css'
 
import "./12C/About.scss";
 import "./12C/OurFocus";
import "./12C/OurTeam.scss";
import "./12C/Benefits.scss";
import "./12C/Investment.scss";

import About from "./12C/About";
import OurFocus from "./12C/OurFocus";
import Benefits from "./12C/Benefits";
import Investment from "./12C/Investment";
import OurTeam from "./12C/OurTeam";


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
