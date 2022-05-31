import React from 'react'
import Adicionar from '../../components/Adicionar/Adicionar'
import Button from '../../components/Button/Button'

function Edicao() {
    return (
        <div>
            <Button text='Adicionar' click={(e) => console.log('click')}/> <br /> <br />
            <Button text='Editar'/> <br /><br />
            <Button text='Deletar' /> <br /><br />
            <hr />
            <br />
        </div>
    )
}

export default Edicao