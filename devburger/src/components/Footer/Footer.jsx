import style from './Footer.module.css'

const Footer = (props) => {
    return (
        <div className={style.footer}>
            <p>
                <span className={style.rights}>Dev Burguer, 2022 - Todos os direitos reservados.</span>
                <br></br>
                <br></br>
                <span>
                    Projeto realizado com fins educacionais por: <strong><a href='https://www.linkedin.com/in/annanda-santos-a93196142/'>Annanda</a></strong>, <strong><a href='https://www.linkedin.com/in/cesarfreitascontato/'>César</a></strong>, <strong><a href='https://www.linkedin.com/in/eduardo-fortes-a3a024a4/'>Eduardo</a></strong> e <strong><a href='https://www.linkedin.com/in/raphhael-m/'>Raphael</a></strong>.
                </span>
            </p>
        </div>
    )
}

export default Footer;