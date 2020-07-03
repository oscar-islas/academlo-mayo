import React from 'react';

//Componente Saludo
export default function Card(props){
    return (
        <div className="card">
            <h1>{props.nombre}</h1>
            <h5>{props.edad}</h5>
            <p>{props.email}</p>
        </div>
    );
}