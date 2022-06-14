import style from './Footer.module.css'
import { FaInstagramSquare, FaFacebookSquare, FaTwitterSquare, FaAndroid, FaApple } from 'react-icons/fa'
import gif from "../../assets/imagens/hamburger.gif"
import { Link } from "react-router-dom"; 
const Footer = (props) => {
    return (
        <div className={style.footer}>

            <div className={style.widgetFooter}>
                <div className={style.mapaDoSite}>
                    <h3>Mapa do Site</h3>
                    <Link to='#'>Home</Link>
                    <Link to="/cardapio">Cardápio</Link>
                    <Link to="/sobre">Sobre Nós</Link>
                </div>
                <div className={style.sigaNos}>
                    <h3>Dev Burger</h3>
                    <p>Siga nossas redes</p>
                    <div className={style.redes}>
                        <a href='#'><FaInstagramSquare size='1.8rem' color='#EDA83B'/></a>
                        <a href="#"><FaFacebookSquare size='1.8rem' color='#EDA83B'/></a>
                        <a href="#"><FaTwitterSquare size='1.8rem' color='#EDA83B'/></a>
                    </div>
                </div>
                <div className={style.baixeNossoApp}>
                    <h3>Baixe nosso App</h3>
                    <div className={style.plataformas}>
                    <a href="#"><FaAndroid size='3rem' color='#EDA83B'/></a>
                    <a href="#"><FaApple size='3rem' color='#EDA83B'/></a>
                    </div>
                </div>
                <div className={style.logo}>
                    <img src={gif} alt="some text" height={200} width={200} />
                </div>
            </div>

            <div className={style.rightsContainer}>
                <p>
                    <span className={style.rights}>Dev Burguer, 2022 - Todos os direitos reservados.</span>
                    <br></br>
                    <br></br>
                    <span className={style.infos}><strong>RAZÃO SOCIAL:</strong> FRANQUEADORA DEV BURGUER LTDA | <strong>TELEFONE:</strong> (11) 1111-1111 | <strong>CNPJ:</strong> 22.222.222/2222-22 | <strong>ENDEREÇO:</strong> RUA, XXXX - ESTADO <br></br>(BAIRRO) - CEP: 33333-333</span>
                </p>
            </div>
        </div>

    )
}

export default Footer;