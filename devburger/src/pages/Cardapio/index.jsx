import React from 'react'
import Cardapio from '../../components/Cardapio/Cardapio'
import Button from '../../components/Button/Button'
import styles from './index.module.css';
import { ToastContainer } from 'react-toastify';
import { FaPlus, FaWrench, FaRegTrashAlt } from "react-icons/fa";

function CardapioPage() {
  
  return (
    <div className={styles.container}>
        <Cardapio/>
        <div className={styles.btn}>
            <Button click={(e) => window.location.href="../add"} className={styles.btn} text={<FaPlus color='#52BF4E'/>} /> 
            <Button click={(e) => window.location.href="../update"} text={<FaWrench />}/>
            <Button click={(e) => window.location.href="../del"} text={<FaRegTrashAlt color='#BF4124'/>} />
            
            <br />
        </div>
        <ToastContainer/>
    </div>
  )
}

export default CardapioPage