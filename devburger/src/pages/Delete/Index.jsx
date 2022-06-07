import React, { useState } from 'react'
import { api } from '../../Services/Api.js'
import Button from '../../components/Button/Button'
import styles from "./Index.module.css"
import FormDelete from '../../components/Form Delete/FormDelete.jsx'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaRegTrashAlt, FaUndoAlt } from "react-icons/fa";

function DeleteProduto() {
    const [item, setItem] = useState({
        id_produto: 1,

    })

    const [id, setId] = useState(1)
    const del = (e) => {
        e.preventDefault()
        console.log('Produto deletado')
        console.log(`${api}/${id}`)
        try {
            axios.delete(`${api}/${id}`)
            .then(res => {
                res.json
                toast.success('Deletado com SUCESSO')
            } )

        } catch (error) {
            console.log(error)
            toast.error('Deletado fora do padrão')
        }
    }
    return (
        <div className={styles.Form}>
            <section>                <FormDelete

                    title={'Deletar um item do cardapio:'}
                    submit={(e) => del(e)}
                    change1={(e) => {
                        setId(e.target.value)
                        console.log(id)
                    }}

                />


            </section>

            <section className={styles.Button}>
                <Button click={(e) => del(e)} text={<FaRegTrashAlt color='#BF4124' />} />
                <Button click={(e) => window.location.href = '../cardapio'} text={<FaUndoAlt color='white'/>} />


            </section>



        </div>
    )
}

export default DeleteProduto