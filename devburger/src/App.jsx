import Header from "./components/Header/Header"
import Cardapio from './components/Cardapio/Cardapio';
import Slider from "./components/Slider/Slider";
import React from "react"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardapioPage from "./pages/Cardapio";
import Edicao from "./pages/Edicao/Edicao";


function App() {


  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/cardapio' element={<CardapioPage/>} ></Route>
        <Route path='/edicao' element={<Edicao/>} > Editar Card</Route>
        
      </Routes>
      <footer>COPYRIGTH 2022 </footer>
      </Router>      
      </div>
  )
}

export default App;
