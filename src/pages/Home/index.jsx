import React from 'react';
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import styles from './index.module.css';
import Banner from "../../assets/imagens/Banner.png"
import Feita from '../../assets/imagens/Feita.png'


function Home() {
    return (
        <div>
            <Slider />
            <div className={styles.Container}>

                <div className={styles.segundo}>
                    <div className={styles.Sobre}>
                    <img src={Feita} height={150} width={300} />
                        
                        A Dev Burger surgiu como uma alternativa para aprimorar e inovar o seu empreendimento. Aqui você é convidado a criar um BURGER do seu jeito: Escolha o pão, o recheio, os molhos, com carnes ou vegetais, você é quem  manda! Bora desenvolver o seu burger hoje?
                    </div> 

                   

                    <div className={styles.segundoGif}>
                        <img src="./src/assets/imagens/areamaps.gif" alt="some text" height={300} width={300} ></img>
                    </div>
                </div>
                <div className={styles.Banner}>
                    <h1> O queridinho da semana: </h1>

                    <img src={Banner} height={530} width={530} />

                </div>

            </div>

        </div>
    )
}

export default Home