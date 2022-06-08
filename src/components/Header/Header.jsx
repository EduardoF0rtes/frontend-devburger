import React from "react";
import styles from "../Header/Header.module.css"
import { Link } from "react-router-dom"; 
import logo from "../../assets/imagens/DevBurger_logoFinal.png"



function Header() {

    return (
    <header className={styles.Header}>
        <div className={styles.img}>
            <a class="navbar-brand" id="logo">
                <img src= {logo} alt="logo DevBurger" height={150} width={150} /></a>
        </div>
        <div className={styles.nav}>
            <ul className={styles.ul}> 
                < Link to ="/"><li> Home </li></Link>
                < Link to="/cardapio"><li> Cardápio </li></Link>
                < Link to="/sobre"><li> Sobre Nós </li></Link>
            </ul>
        </div>

    </header>
    )
}

export default Header;
