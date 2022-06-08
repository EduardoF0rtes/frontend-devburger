import React from 'react'
import style from './Card.module.css'

function Card(props) {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.front} >
                    <img src={props.imagem} alt="" />
                    <span ></span>
                    <b></b>
                    <span ></span>
                    <span ></span>

                </div>
                <div className={style.back}>
                    <span >nº {props.id}</span>
                    <b>{props.name}</b>
                    <span >R$ {props.preco}</span>
                    <span >{props.descricao}</span>
                </div>
            </div>
        </div>

    )
}
export default Card