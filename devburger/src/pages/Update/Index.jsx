import React, { useState } from 'react'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button'
import styles from './Index.module.css'

function UpdateProduto() {
    const [item, setItem] = useState({
        id_produto: 1,
        produto: "Dev-Egg",
        preco: 16,
        descricao: "Pão brioche com carne artesanal, queijo e ovo"
    })
    const [id, setId] = useState(1)
    const [produto, setProduto] = useState("Dev-Egg")
    const [preco, setPreco] = useState(16)
    const [descricao, setDescricao] = useState("Pão brioche com carne artesanal, queijo e ovo")

    return (
        <div className={styles.form}>
            <section>
                <Form
                    title={'Edite um item do cardapio.'}
                    submit={(e) => update(e)}
                    change1={(e) => setId(e.target.value)}
                    change2={(e) => setProduto(e.target.value)}
                    change3={(e) => setPreco(e.target.value)}
                    change4={(e) => {
                        setDescricao(e.target.value)
                        setItem({
                            id, produto, preco, descricao
                        })
                    }}
                    id={id}
                    produto={produto}
                    preco={preco}
                    descricao={descricao}

                />
            </section>
            <section>
                <Button text='✔️' />
                <Button click={(e) => window.location.href = '../cardapio'} text='↩️' />
            </section>

        </div>
    )
}

export default UpdateProduto