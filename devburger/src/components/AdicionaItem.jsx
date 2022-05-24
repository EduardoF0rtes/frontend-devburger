import React, {useContext, useState} from "react";
import { CardapioContext } from "../contexts/CardapioContext";

const AddItem = () => {
    const {adcBurger} = useContext(CardapioContext);
    const [item, setItem] = useState({title: 'UmBurger', preco: 10});
    const [preco, setPreco] = useState();
    const formSubmit = e => {
        e.preventDefault()
        adcBurger(item)
    }
    const inputPreco = e => {
        setPreco({
            ...preco,
            preco: e.target.preco
        })
    }
    const inputChange = e => {
        setItem({
            ...item,
            title: e.target.value,
        })
    }
    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="title">Nome do burger: </label>
            <input type="text" name="title" id="title" onChange={inputChange} />
            <label htmlFor="preco">Preço: </label>
            <input type="number" name="preco" id="preco" onChange={inputPreco} />
            <button>Adicionar</button>
        </form>
    )
}
export default AddItem