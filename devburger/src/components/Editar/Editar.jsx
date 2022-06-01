import React, { useState } from 'react'
import { api } from '../../Services/Api.js'

function Editar(e) {

    const [item, setItem] = useState({
        id_produto: 1,
        produto: "Dev-Egg",
        preco: 16,
        descricao: "Pão brioche com carne artesanal, queijo e ovo"

    })

    const [id, setId] = useState({
        id_produto: 1
    })

    const [produto, setProduto] = useState({
        produto: "Dev-Egg"
    })
    const [preco, setPreco] = useState({
        preco: 16
    })

    const [descricao, setDescricao] = useState({
        descricao: "Pão brioche com carne artesanal, queijo e ovo"
    })

    const update = (e) => {
        e.preventDefault()
        try {
            fetch(`${api}/${id}`, {
                method: "PUT",
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                },

            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <form onSubmit={(e) => update(e)}>
            <input type="number" placeholder='id' onChange={(e) => setId(e.target.value)} />
            <input type="text" placeholder='produto'onChange={(e) => setProduto(e.target.value)} />
            <input type="number" placeholder='preço' onChange={(e) => setPreco(e.target.value)} />
            <input type="text" placeholder='descrição'onChange={(e) => {
                setDescricao(e.target.value)
                setItem({
                    id, produto, preco, descricao
                })
                console.log(item)
            }} />

            <button>Atualizar</button>


        </form>
    )
}

export default Editar
