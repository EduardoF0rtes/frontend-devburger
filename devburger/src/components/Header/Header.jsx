import React from "react";
import styles from "../Header/Header.module.css"

function Header() {

    return (
    <header className={styles.Header}>
        <div className={styles.img}>
            <a class="navbar-brand" id="logo">
                <img src="./src/logo/DevBurger_logoFinal.png" alt="some text" height={200} width={200} ></img></a>
        </div>
        <div className={styles.nav}>
            <ul className={styles.ul}> 
                < a href="#"><li> Home </li></a>
                < a href="#"><li> Cárdapio </li></a>
                {/* < a href="#"><li> Clientes </li></a> */}
                < a href="#"><li> Sobre Nós </li></a>
            </ul>
        </div>

    </header>
    )
}

export default Header;
