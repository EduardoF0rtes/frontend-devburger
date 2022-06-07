import React, { useState } from 'react'
import Form from '../../components/Form/Form'
import Button from '../../components/Button/Button';
import styles from './Add.module.css';
import { api } from '../../Services/Api.js'
import { toast } from 'react-toastify';
import { FaCheck, FaUndoAlt } from "react-icons/fa";

function Add() {
  const [item, setItem] = useState({
    id_produto: '',
    produto: '',
    preco: '',
    descricao: ''
  });
  const [id, setId] = useState(99)
  const [produto, setProduto] = useState('Dev-X')
  const [preco, setPreco] = useState(15)
  const [descricao, setDescricao] = useState('Breve descricao')
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
        .then((data) => {
          console.log(data)
          if (data.message == undefined) {
            toast.error(data.erro)
          } else {
            toast.success(data.message)
          }
        })
    } catch (error) {
      // console.error(error);
      toast.error(data.erro)
    }
    // console.log('Enviado!')



  }
  return (
    <div className={styles.form}>
      <section>
        <Form
          title={'Adicione Novo Burger'}
          submit={(e) => atualiza(e)}
          change1={(e) => setId(e.target.value)}
          change2={(e) => setProduto(e.target.value)}
          change3={(e) => setPreco(e.target.value)}
          change4={(e) => {
            setDescricao(e.target.value)
            setItem({
              id,
              produto,
              preco,
              descricao
            })
          }}
          id={id}
          produto={produto}
          preco={preco}
          descricao={descricao}
        />
      </section>
      <section>
        <Button click={(e) => atualiza(e)} text={<FaCheck color='#52BF4E'/>} />
        <Button click={(e) => window.location.href = '../cardapio'} text={<FaUndoAlt color='white'/>} />
      </section>
    </div>
  )
}

export default Add