import Header from "./components/Header/Header"
import Cardapio from './components/Cardapio/Cardapio';
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import React from "react"
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardapioPage from "./pages/Cardapio";
import Add from "./pages/Add/Add";
import UpdateProduto from "./pages/Update/Index";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import DeleteProduto from "./pages/Delete/Index";
import PageSobre from "./pages/Sobre/PageSobre";


function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cardapio' element={<CardapioPage />}></Route>
          <Route path='/add' element={<Add />}></Route>
          <Route path='/update' element={<UpdateProduto />}></Route>
          <Route path= '/del' element={<DeleteProduto/>}></Route>
          <Route path= '/sobre' element={<PageSobre/>}></Route>
        </Routes>
        <Footer />
      </Router>
      <ToastContainer/>
    </div>
  )
}

export default App;