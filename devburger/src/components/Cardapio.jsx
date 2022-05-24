import React, { useContext } from "react";
import { CardapioContext } from "../contexts/CardapioContext";
import Cards from "./Cards";

const Cardapio = () => {
    const context = useContext(CardapioContext);
    const data = context.cardapio.map(burger => (
        <Cards key={burger.id} burger={burger}>
        </Cards>
    ))
        return (
            <div>
                {data}
            </div>
        )
};
export default Cardapio;