import React from 'react';
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import styles from './index.module.css';
import Banner from "../../assets/imagens/Banner.png"


function Home() {
    return (
        <div className={styles.Container}>
            <Slider />
            <div className={styles.segundo}>
                <div className={styles.Sobre}>
                    <h1> Sobre nós  </h1>
                   A <i> Dev Burger </i> surgiu como uma alternativa para aprimorar e inovar o seu empreendimento.
                   Nós ja temos o nosso cardapio mas aqui você é convidado a desenvolver o
                   seu proprio BURGER. 
                   Do seu jeito: Escolha o pão, o recheio, os molhos, com carnes ou vegetais,
                   você é que manda! 
                    Bora desenvolver o seu burger hoje? 
                                        
                </div>
                <div className={styles.Banner}>
                    <h1> O queridinho da semana: </h1>
                    <img src={Banner}  height={600} width={600}/>

                </div>
            </div>
        </div>
    )
}

export default Home