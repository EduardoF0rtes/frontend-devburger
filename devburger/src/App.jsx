import Header from "./components/Header/Header"
import { useState } from 'react'
import Cardapio from './components/Cardapio/Cardapio';
import React from "react"
import Slider from "./components/Slider/Slider";


function App() {


  return (
    <div className="App">
      <Header />
      <Slider/>
      <Cardapio />
      
      </div>
  )
}

export default App;
