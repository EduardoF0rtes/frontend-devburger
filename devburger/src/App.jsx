import Header from "./components/Header/Header"
import Cardapio from './components/Cardapio/Cardapio';
import Slider from "./components/Slider/Slider";
import React from "react"


function App() {


  return (
    <div className="App">
      <Header />
      <Slider/>
      <hr />
      <Cardapio />
      
      </div>
  )
}

export default App;
