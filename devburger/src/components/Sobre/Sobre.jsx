import React from 'react'
import imagem from '../../assets/imagens/Sobre1.png'
import styles from './Sobre.module.css'

function Sobre() {
  return (
    <div className={styles.Sobre}>


      <div className={styles.imagem}>
        <img src={imagem} height={200} width={300} />


      </div>

      <div className={styles.equipe}> 

      <div className={styles.dev}>
        <p>Annanda, 32 anos, paraense.</p>

      </div>

      <div className={styles.dev}>
        <p>Cesar, 24 anos, carioca.</p>
      </div>
      <div className={styles.dev}>
        <p>Eduardo, 37 anos, paulista. </p>
      </div>
      <div className={styles.dev}>
        <p>Raphael, 30 anos, mineiro. </p>

      </div>

      </div>




    </div>
  )
}

export default Sobre