import React from 'react'
import styles from './Button.module.css';

function Button(props) {
  return (
    <div className={styles.btn}>
    <button  type={props.type} onClick={props.click} >
        {props.text}
    </button>
    </div>
  )
}

export default Button