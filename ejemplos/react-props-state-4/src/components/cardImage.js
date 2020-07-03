import React from 'react';

export default function CardImage(props) {
    return (
        <div>
            <img src={props.imagen} alt={props.titulo} />
            <h4>{props.titulo}</h4>
        </div>
    )
}