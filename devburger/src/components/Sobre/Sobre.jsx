import React from 'react'
import styles from './Sobre.module.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import nanda from '../../assets/imagens/nanda.jpg'
// import cesar from '../../assets/imagens/cesar.jfif'
// import edu from '../../assets/imagens/edu.jfif'
import rapha from '../../assets/imagens/rapha.jpeg'

function Sobre() {
  return (
    <div className={styles.Sobre}>


      {/* <div className={styles.imagem}>
        

      </div> */}

      <div className={styles.equipe}> 
     
      <div className={styles.dev}>
        <p><b>Annanda, 32 anos, paraense.</b></p>
        <img src={nanda} height={130} width={130} /><br/>
        <a href='https://github.com/asnts'><FaGithub size='1.8rem' color='#EDA83B'/></a>
        <a href="https://www.linkedin.com/in/annanda-santos-a93196142/"><FaLinkedin size='1.8rem' color='#EDA83B'/></a>

      </div>

      <div className={styles.dev}>
        <p><b> Cesar, 24 anos, carioca.</b></p>
        {/* <img src={cesar} height={150} width={300} /> */}
        <a href='https://github.com/cesarfreitax'><FaGithub size='1.8rem' color='#EDA83B'/></a>
        <a href="https://www.linkedin.com/in/cesarfreitascontato/"><FaLinkedin size='1.8rem' color='#EDA83B'/></a>
      </div>
      <div className={styles.dev}>
        <p><b>Eduardo, 37 anos, paulista.</b> </p>
        {/* <img src={edu} height={150} width={300} /> */}
        <a href='https://github.com/EduardoF0rtes'><FaGithub size='1.8rem' color='#EDA83B'/></a>
        <a href="https://www.linkedin.com/in/eduardo-fortes-a3a024a4/"><FaLinkedin size='1.8rem' color='#EDA83B'/></a>
      </div>
      <div className={styles.dev}>
        <p><b>Raphael, 30 anos, mineiro. </b> </p>
        {<img src={rapha} height={100} width={100} /> }<br/>
        <a href='https://github.com/raphhaelm'><FaGithub size='1.8rem' color='#EDA83B'/></a>
        <a href="https://www.linkedin.com/in/raphhael-m/"><FaLinkedin size='1.8rem' color='#EDA83B'/></a>

      </div>

      </div>




    </div>
  )
}

export default Sobre