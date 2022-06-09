import React from 'react'
import Cardapio from '../../components/Cardapio/Cardapio'
import Button from '../../components/Button/Button'
import styles from './index.module.css';
import { ToastContainer } from 'react-toastify';
import { FaPlus, FaWrench, FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function CardapioPage() {
  
  return (
    <div className={styles.container}>
        <Cardapio/>
        <div className={styles.btn}>
            <Link to={"/add"}><Button  className={styles.btn} text={<FaPlus color='#52BF4E'/>}/></Link>
            <Link to={"/update"}><Button text={<FaWrench />}/></Link>
            <Link to={"/del"}><Button text={<FaRegTrashAlt color='#BF4124'/>}/></Link>
            
            <br />
        </div>
        <ToastContainer/>
    </div>
  )
}

export default CardapioPage