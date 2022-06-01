import React, { useState } from 'react'
import { api } from '../../Services/Api.js'
import styles from "./Editar.module.css"
import Card from '../Cards/Card.jsx'
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

    const [espelho, setEspelho] = useState({
        id_produto: 1,
        produto: "Dev-Egg",
        preco: 16,
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

        <div className={styles.Container}>
            <form className={styles.Form} onSubmit={(e) => update(e)}>
                <label > ID: </label>
                <input type="number" onChange={(e) => setId(e.target.value)} />
                <label > PRODUTO: </label>
                <input type="text" onChange={(e) => setProduto(e.target.value)} />
                <label > PREÇO: </label>
                <input type="number" onChange={(e) => setPreco(e.target.value)} />
                <label > DESCRIÇÃO: </label>
                <input type="text" onChange={(e) => {
                    setDescricao(e.target.value)
                    setItem({
                        id, produto, preco, descricao
                    })
                    console.log(item)
                }} />

                <button className={styles.Button}>Atualizar</button>


            </form>
        </div>
    )

                }    export default Editar


        // <div className = { styles.Card }>
        // {
        //     item.map((espelho, index) => {
        //         return (
        //             <Card key={index} id={espelho.id_produto} name={espelho.produto} preco={espelho.preco} descricao={espelho.descricao} />
        //         )
        //     }
        //     )
        // }
        //     }   
            // </div> 