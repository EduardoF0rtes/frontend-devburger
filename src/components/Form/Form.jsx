import React from 'react'
import styles from "./Form.module.css"
import Card from '../Cards/Card'

function Form(props) {
const onMouse = (e)=>{
  
}

  return (

    <div className={styles.container}>
      <form className={styles.form} onSubmit={props.submit}>

        <h1>{props.title}</h1><hr /><br />
        <div>
          <input type='number' onChange={props.change1} />
          <label htmlFor="">Id : </label><br />
        </div>
        <div>
          <input type="text" onChange={props.change2} />
          <label htmlFor="">Produto: </label><br />
        </div>
        <div>
          <input type="number" onChange={props.change3} />
          <label htmlFor="">Preco: </label><br />
        </div>
        <div>
          <textarea type="text" onChange={props.change4} />
          <label htmlFor="">Descrição: </label><br /><br />
        </div>        
        <div>
          <select name="imagem" id="" onChange={props.change5}>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
          </select>
          <label htmlFor="">Imagem: </label><br /><br />
        </div>
      </form>
      <div >
        <h1>Preview</h1> <hr /><br />
        <Card
          card='200px'
          key={props.id}
          imagem={props.imagem}
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