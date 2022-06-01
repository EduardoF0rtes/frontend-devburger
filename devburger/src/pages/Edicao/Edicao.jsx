import React from 'react'
import Adicionar from '../../components/Adicionar/Adicionar'
import Button from '../../components/Button/Button'
import styles from '../../components/Button/Button.module.css';


function Edicao() {
    return (
        <div className={styles.btn}>
          <Adicionar/>
        </div>
    )
}

export default Edicao