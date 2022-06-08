import React from 'react'
import styles from "./FormDelete.module.css"


function FormDelete(props) {

  return (

    <div className={styles.container}>
      <form className={styles.form} onSubmit={props.submit}>

        <h1>{props.title}</h1><hr /><br />
        <div>
          <input type='number' onChange={props.change1} />
          <label htmlFor="">Id : </label><br />
        </div>
        
      </form>

    </div>
  )
}
export default FormDelete