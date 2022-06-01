import React from 'react'
import Cardapio from '../../components/Cardapio/Cardapio'
import Button from '../../components/Button/Button'
import styles from './index.module.css';
import Adicionar from '../../components/Adicionar/Adicionar';
function CardapioPage() {
  
  return (
    <div className={styles.container}>
        <Cardapio/>
        <div className={styles.btn}>
            <a href="../edicao"><Button className={styles.btn} text='➕' /> </a>
            <a href="../update"><Button text='🔁'/> </a>
            <Button text='❌' />
            
            <br />
        </div>
    </div>
  )
}

export default CardapioPage