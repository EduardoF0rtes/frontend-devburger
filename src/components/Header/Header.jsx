import React, { useState } from "react";
import styles from "../Header/Header.module.css"
import { Link } from "react-router-dom";
import logo from "../../assets/imagens/DevBurger_logoFinal.png"



function Header() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <div className={styles.App}>

            <header className={styles.Header}>
                <div className={active ? styles.img : styles.imgActive}>
                </div>
                <div className={active ? styles.onIcon : styles.icon} onClick={ToggleMode}>
                    <div className={styles.hamburger}>
                    </div>
                </div>
                <div className={active ? styles.menuOpen : styles.menuClose}>
                    <div className={styles.nav}>
                        <ul className={styles.ul}>
                            <li>< Link to="/"> Home </Link></li>
                            <li>< Link to="/cardapio">Cardápio </Link></li>
                            <li>< Link to="/sobre">Sobre Nós</Link></li>
                        </ul>
                    </div>

                </div>

            </header>

        </div>

    )
}

export default Header;
