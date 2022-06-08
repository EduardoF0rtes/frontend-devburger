import React, { useState } from 'react'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button'
import styles from './Index.module.css'
import { api } from '../../Services/Api.js';
import { toast } from 'react-toastify';
import { FaWrench, FaUndoAlt } from "react-icons/fa";
import { burger1 } from '../../components/Fotos/Fotos';
import { Link } from 'react-router-dom';


function UpdateProduto() {
    const [item, setItem] = useState({
        id_produto: '',
        produto: '',
        preco: '',
        descricao: '',
        imagem: 0
    })
    const [id, setId] = useState("")
    const [produto, setProduto] = useState("")
    const [preco, setPreco] = useState("")
    const [descricao, setDescricao] = useState("")
    const [imagem, setImagem] = useState(0)
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
                .then((data) => {
                    console.log(data)
                    if (data.message == undefined) {
                        toast.error(data.erro)
                    } else {
                        toast.success(data.message)
                    }
                })
        } catch (error) {
            console.error(error)
            toast.error(data.erro)
        }
    }
    return (
        <div className={styles.form}>
            <section>
                <Form
                    title={'Edite um item do cardapio.'}
                    submit={(e) => update(e)}
                    change1={(e) => setId(e.target.value)}
                    change2={(e) => setProduto(e.target.value)}
                    change3={(e) => setPreco(e.target.value)}
                    change5={(e) => setImagem(e.taget.value)}
                    change4={(e) => {
                        setDescricao(e.target.value)
                        setItem({
                            id, produto, preco, imagem, descricao
                        })
                    }}
                    id={id}
                    produto={produto}
                    preco={preco}
                    imagem={burger1[imagem]}
                    descricao={descricao}

                />
            </section>
            <section>
                <Button click={(e) => update(e)} text={<FaWrench />} />
                <Link to="./cardapio">  <Button text={<FaUndoAlt color='white' />} /></Link>
            </section>

        </div>
    )
}

export default UpdateProduto