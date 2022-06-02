import React from 'react'
import style from './Card.module.css'

function Card({ card, id, name, preco, descricao }) {
    return (
        <div className={style.item}>
            <img src="https://cdn.icon-icons.com/icons2/1555/PNG/512/fast-food-icons-freeburger_107425.png" alt="" />
            <span >nº {id}</span>
            <b >{name}</b>
            <span >R$ {preco}</span>
            <span >{descricao}</span>
        </div>

    )
}
export default Card