import React, { useState } from 'react'

function AdicionaItem(Objeto) {
    const [adiciona, setAdiciona] = useState([]);
    const option = {
        method: 'POST',
        Objeto: Object.keys(Objeto)
            .map(k => `${URI(k)}=${URI(Objeto[k])}`)
            .join('&')
    }
    fetch('https://apirestdevburger.herokuapp.com/cardapio', option)
        .then(T => T.json())
        .then(() => console.log('cadastrado!'));
    // .catch(() => console.log('Falhou');)

    return (
        <div>AdicionaItem

        <button onClick={AdicionaItem({id_produto: 9, produto: 'Dev-dev', preco: 99})}>cadastrado</button>

        </div>
    )
}

export default AdicionaItem