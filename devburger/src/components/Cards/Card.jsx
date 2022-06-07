import React from 'react'
import style from './Card.module.css'

function Card({ card, id, name, preco, descricao, imagem }) {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.front} >
                    <img src={imagem} alt="" />
                    <span ></span>
                    <b></b>
                    <span ></span>
                    <span ></span>

                </div>
                <div className={style.back}>
                    <span >nº {id}</span>
                    <b>{name}</b>
                    <span >R$ {preco}</span>
                    <span >{descricao}</span>
                </div>
            </div>
        </div>

    )
}
export default Card