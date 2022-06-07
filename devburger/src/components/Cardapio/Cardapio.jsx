import React, { useState, useEffect } from 'react';
import style from './Cardapio.module.css'
import Card from '../Cards/Card';
import { api } from '../../Services/Api';


function Cardapio() {
    const [dados, setDados] = useState([{}]);
    const [cardapio, setCardapio] = useState([]);
    useEffect(() => {
        try {
            fetch(api)
                .then((response) => response.json())
                .then((data) => {
                    setDados(data.rows)
                    setCardapio([...cardapio, data.rows])
                })
        } catch (err) {
            console.log('error:', err);
        }
    }, []);
    return (
        <div className={style.cardapio}>
            {dados.map((cardapio, index) => {
                return (
                    <div>
                        <div>
                            <Card

                                key={index}
                                imagem="https://cdn.icon-icons.com/icons2/1555/PNG/512/fast-food-icons-freeburger_107425.png"
                                card='25%'
                                id={cardapio.id_produto}
                                name={cardapio.produto}
                                preco={cardapio.preco}
                                descricao={cardapio.descricao}
                            />
                        </div>
                    </div>

                )
            })}

        </div>

    )
}

export default Cardapio