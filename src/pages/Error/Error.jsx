import React from 'react';
import style from './Error.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { FaUndoAlt } from "react-icons/fa";

function Error() {
    return (
        <>
        <div className={style.container}>
            <h1>Página não encontrada.</h1>
            <p>Está página não existe ou esta em manutenção.</p>
            <p>Utilize o botão para retornar.</p>
            <div>
            <Link to="/cardapio"><Button text={<FaUndoAlt color='white' />} /></Link>
            </div>
            

        </div>
        </>
        
    )
}

export default Error