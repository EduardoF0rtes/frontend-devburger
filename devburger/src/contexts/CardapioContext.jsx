import React, {useState, createContext} from "react";
export const CardapioContext = createContext();

const CardapioProvider = ({ children }) => {
    const [cardapio, setCardapio] = useState([
        {id:1, title: 'DevBacon', preco: 19.9},
        {id:2, title: 'DevBacon', preco: 19.9},
        {id:3, title: 'DevBacon', preco: 19.9},
        {id:4, title: 'DevBacon', preco: 19.9}
    ]);
    const adcBurger = burger => {
        const newBurger = {
            id: cardapio.length +1,
            title: burger.title,
            preco: burger.preco,
        };
        setCardapio([...cardapio, newBurger])
    } 
    return (
        <CardapioContext.Provider value = {{cardapio, adcBurger}} >
            {children}
        </CardapioContext.Provider>
    )
};
export default CardapioProvider
