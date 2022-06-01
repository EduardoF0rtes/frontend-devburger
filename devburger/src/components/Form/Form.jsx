import React from 'react'
import styles from "./Form.module.css"

function Form(props) {
  return (
    
 <div className={styles.Container}> 
        <form  className={styles.Form} onSubmit={props.submit}>
            <label > ID: </label>
            <input type="number"  onChange={props.change} />
            <label > PRODUTO: </label>
            <input type="text" onChange={props.change} />
            <label > PREÇO: </label>
            <input type="number"  onChange={props.change} />
            <label > DESCRIÇÃO: </label>
            <input type="text" onChange={props.change} />

            <button className={styles.Button}>Atualizar</button>


        </form>
    



        </div>


    
  )
}

export default Form