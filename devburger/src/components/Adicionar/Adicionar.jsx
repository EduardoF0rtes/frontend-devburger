import React, { useState } from 'react'
import { api } from '../../Services/Api'

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
        <form onSubmit={(e) => atualiza(e)}>
            <label htmlFor="">id_produto: </label>
            <input type="id" onChange={(e) => {
                setId(e.target.value)
            }} /> <br />

            <label htmlFor="">produto: </label>
            <input type="text" onChange={(e) => {
                setProduto( e.target.value)
            }} /> <br />
            <label htmlFor="">preco: </label>
            <input type="number" onChange={(e) => {
                setPreco(e.target.value )
            }} /> <br />
            <label htmlFor="">descrição: </label>
            <input type="text" onChange={(e) => {
                setDescricao(e.target.value)
                setItem({
                    id,
                    produto,
                    preco,
                    descricao
                })
                console.log(item)
            }} /> <br /><br />
            <button>Salvar</button>
            <br />
            <hr />
            <br />
        </form>
    )


}



export default Adicionar