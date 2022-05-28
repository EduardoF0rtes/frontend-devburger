import React, { useState, useEffect } from 'react';
import style from './Cardapio.module.css'
import Card from '../Cards/Card';


function Cardapio() {
        const [dados, setDados] = useState([{}]);
        const [cardapio, setCardapio] = useState([]);      
            useEffect(() => {
        try{
            fetch('https://apirestdevburger.herokuapp.com/cardapio')
            .then((response) => response.json())
            .then((data)=> {
                setDados(data.rows)
                setCardapio([...cardapio,data.rows])
                console.log(dados);
            })
        } catch (err) {
            console.log('error:', err);
        }
    },[]); 
    return (
        <div className={style.cardapio}>
            {dados.map((cardapio, index) => {
                return (
                    <Card
            key={index}
            id={cardapio.id_produto}
            name={cardapio.produto}
            preco={cardapio.preco}
            />
                )
            })}
            
        </div>
        
    )   
}

export default Cardapio