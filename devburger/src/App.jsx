import React from "react";
import CardapioProvider from "./contexts/CardapioContext";
import Cardapio from "./components/Cardapio";
import AddItem from './components/AdicionaItem';

  function App() {

    return (
      <>
        <CardapioProvider>
          <Cardapio>

          </Cardapio>
          <hr />
          <AddItem>
          </AddItem>
        </CardapioProvider>
      </>
    )
  }

export default App
