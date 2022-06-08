import React, { useState, useEffect } from 'react';
import style from './Cardapio.module.css'
import Card from '../Cards/Card';
import { api } from '../../Services/Api';
import { burger1 } from '../Fotos/Fotos';



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
                                card='25%'
                                id={cardapio.id_produto}
                                name={cardapio.produto}
                                preco={cardapio.preco} 
                                descricao={cardapio.descricao}                                                               
                                imagem={burger1[cardapio.id_produto]}
                            />
                        </div>
                    </div>

                )
            })}

        </div>

    )
}

export default Cardapio