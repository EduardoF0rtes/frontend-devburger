import React from 'react'
import styles from './Sobre.module.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import nanda from '../../assets/imagens/nanda.png'
import cesar from '../../assets/imagens/cesar.png'
import edu from '../../assets/imagens/edu.png'
import rapha from '../../assets/imagens/rapha.jpeg'

function Sobre() {
  return (
    <div className={styles.Sobre}>

      <div className={styles.equipe}> 
     
      <div className={styles.dev}>
        <p><b>Annanda, 32 anos, paraense.</b></p> <br/>
        <img src={nanda} height={120} width={130} /><br/><br/>
        <a href='https://github.com/asnts'><FaGithub size='1.8rem' color='#EDA83B'/></a>
        <a href="https://www.linkedin.com/in/annanda-santos-a93196142/"><FaLinkedin size='1.8rem' color='#EDA83B'/></a>

      </div>

      <div className={styles.dev}>
        <p><b> Cesar, 24 anos, carioca.</b></p><br/>
        <img src={cesar} height={120} width={130} /> <br/><br/>
        <a href='https://github.com/cesarfreitax'><FaGithub size='1.8rem' color='#EDA83B'/></a>
        <a href="https://www.linkedin.com/in/cesarfreitascontato/"><FaLinkedin size='1.8rem' color='#EDA83B'/></a>
      </div>
      <div className={styles.dev}>
        <p><b>Eduardo, 37 anos, paulista.</b> </p><br/>
        <img src={edu} height={120} width={130} /> <br/><br/>
        <a href='https://github.com/EduardoF0rtes'><FaGithub size='1.8rem' color='#EDA83B'/></a>
        <a href="https://www.linkedin.com/in/eduardo-fortes-a3a024a4/"><FaLinkedin size='1.8rem' color='#EDA83B'/></a>
      </div>
      <div className={styles.dev}>
        <p><b>Raphael, 30 anos, mineiro. </b> </p> <br/>
        {<img src={rapha} height={120} width={120} /> }<br/><br/>
        <a href='https://github.com/raphhaelm'><FaGithub size='1.8rem' color='#EDA83B'/></a>
        <a href="https://www.linkedin.com/in/raphhael-m/"><FaLinkedin size='1.8rem' color='#EDA83B'/></a>

      </div>

      </div>




    </div>
  )
}

export default Sobre