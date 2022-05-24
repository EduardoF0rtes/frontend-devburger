import React from "react";

const Cards = ({ burger }) => {
    return (
        <div>
            {burger.id} <br />
            {burger.title} <br />
            {burger.preco} <br />
        </div>
    );
};

export default Cards