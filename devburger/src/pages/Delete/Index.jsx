import React, { useState } from 'react'
import {api} from '../../Services/Api.js'
import Button from '../../components/Button/Button'
import styles from "./Index.module.css"
import FormDelete from '../../components/Form Delete/FormDelete.jsx'

function DeleteProduto() {
    const [item, setItem] = useState({
        id_produto: 1,
 
    })

    const [id, setId] = useState(1)
    const del = (e) => {
        e.preventDefault()
        console.log('Produto deletado')
        try {
            fetch(`${api}/${id}}`, {
                method: "DELETE",
                body: JSON.stringify(item),
                headers: {
                    "Content-type": "application/json",
                },
            })

                .then((res) => res.json())
                .then((data) => console.log(data))
                console.log('Produto deletado com sucesso')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.Form}>
<section>
<FormDelete

title= {'Deletar um item do cardapio:'}
submit={(e) => del (e)}
change1={(e) => setId(e.target.value)}
change2= {(e) => {
    setItem({
        id
    })
}}
id={id}

/>


</section>

<section className={styles.Button}>
<Button click={(e) => del (e)} text='✔️' />
<Button click={(e) => window.location.href = '../cardapio'} text = '↩️'/>

    
</section>



        </div>
    )
}

export default DeleteProduto