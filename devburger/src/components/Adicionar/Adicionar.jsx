import React, { useState } from 'react'
import { api } from '../../Services/Api'
import styles from './Adicionar.module.css';

function Adicionar() {

    const [item, setItem] = useState({
        id_produto: 100,
        produto: 'Dev-X',
        preco: 99,
        descricao: 'Descrição produto'
    });
    const [id, setId] = useState({ id_produto: 99 })
    const [produto, setProduto] = useState({ produto: 'Dev-X' })
    const [preco, setPreco] = useState({ preco: 15 })
    const [descricao, setDescricao] = useState({ descricao: 'Breve descricao' })

    const atualiza = (e) => {
        e.preventDefault();
        try {
            fetch(api, {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
            console.log('Enviado!')
        } catch (error) {
            console.error(error);
        }
    }
    return (
<div className={styles.container}>
        <form className={styles.form} onSubmit={(e) => atualiza(e)}>

            <h1>Adicione Novo Burger</h1><hr /><br />
            <label htmlFor="">Id : </label>
            <input type="id" onChange={(e) => {
                setId(e.target.value)
            }} /> <br />
            <label htmlFor="">Produto: </label>
            <input type="text" onChange={(e) => {
                setProduto(e.target.value)
            }} /> <br />
            <label htmlFor="">Preco: </label>
            <input type="number" onChange={(e) => {
                setPreco(e.target.value)
            }} /> <br />
            <label htmlFor="">Descrição: </label>
            <input type="text" onChange={(e) => {
                setDescricao(e.target.value)
                setItem({
                    id,
                    produto,
                    preco,
                    descricao
                })
            }} /> <br /><br />
            <br />
            <hr />
            <br />
            <button>Adicionar</button>
            <br />
            <br />
            <br />
        </form>
</div>
    )

}

export default Adicionar