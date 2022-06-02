import React from 'react'
import Cardapio from '../../components/Cardapio/Cardapio'
import Button from '../../components/Button/Button'
import styles from './index.module.css';
function CardapioPage() {
  
  return (
    <div className={styles.container}>
        <Cardapio/>
        <div className={styles.btn}>
            <Button click={(e) => window.location.href="../add"} className={styles.btn} text='➕' /> 
            <Button click={(e) => window.location.href="../update"} text='🔁'/>
            <Button click={(e) => window.location.href="../del"} text='❌' />
            
            <br />
        </div>
    </div>
  )
}

export default CardapioPage