import Header from "./components/Header/Header"
import Cardapio from './components/Cardapio/Cardapio';
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import React from "react"


function App() {


  return (
    <div className="App">
      <Header />
      <Slider/>
      <hr />
      <Cardapio />
      <Footer />
      </div>
  )
}

export default App;
