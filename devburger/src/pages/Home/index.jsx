import React from 'react';
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import styles from './index.module.css';


function Home() {
    return (
        <div>
            <Slider />
            <div className={styles.segundo}>
                <div>
                   A Dev burger é uma Hamburgueria inovadora e em desenvolvimento.
                   Nós ja temos o nosso cardapio mas, aqui você é convidado a desenvolver 
                   seu proprio BURGER. 
                   Do seu jeito, escolha o Pão, o Recheio, os molhos, com carnes ou vegetarias,
                   Vocês é que mandam ... 
                   Bora Desenvolver um Burger Cabuloso? 
                                        Click aqui ...
                </div>
                <div className={styles.segundoGif}>
                <img src="./src/assets/imagens/areamaps.gif" alt="some text" height={300} width={300} ></img>
                </div>
            </div>
        </div>
    )
}

export default Home