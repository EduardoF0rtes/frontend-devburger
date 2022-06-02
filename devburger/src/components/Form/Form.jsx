import React from 'react'
import Button from '../Button/Button'
import styles from "./Form.module.css"
import Card from '../Cards/Card'
import tanana from '../../pages/Cardapio/index'

function Form(props) {

  return (

    <div className={styles.container}>
      <form className={styles.form} onSubmit={props.submit}>

        <h1>{props.title}</h1><hr /><br />
        <label htmlFor="">Id : </label>
        <input type='number' onChange={props.change1} /> <br />
        <label htmlFor="">Produto: </label>
        <input type="text" onChange={props.change2} /> <br />
        <label htmlFor="">Preco: </label>
        <input type="number" onChange={props.change3} /> <br />
        <label htmlFor="">Descrição: </label>
        <input type="text" onChange={props.change4} /> <br /><br />
        <div>

        </div>
        
      </form>
      <div >
        <h1>Preview</h1>
        <Card
          card='100%'
          key={props.id}
          id={props.id}
          name={props.produto}
          preco={props.preco}
          descricao={props.descricao}
        />

      </div>
    </div>
  )
}
export default Form