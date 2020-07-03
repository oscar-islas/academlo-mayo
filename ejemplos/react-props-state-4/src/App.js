import React from 'react';

import Card from './components/card';
import CardImage from './components/cardImage';

import './App.css';

//Componente de Clase
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      usuarios: [
        {
          nombre: "Oscar",
          edad: 27,
          email: "oislasreyes@gmail.com"
        },{
          nombre: "Luis",
          edad: 30,
          email: "luis@gmail.com"
        },{
          nombre: "Felipe",
          edad: 27,
          email: "felipe@gmail.com"
        }
      ], 
      noticias: [
        {
          title: 'Los hospitales enfrentan "una explosión de covid-19"',
          imgUrl: 'https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200629091315-houston-hostpital-exlarge-169.jpg?quality=100&strip=info&w=105&h=60&crop=1'
        }
      ]
    }
  }

  cambiarNombreFn = (nuevoNombre) => {
    let arregloUsuarios = this.state.usuarios;
    arregloUsuarios[0].nombre = nuevoNombre;
    this.setState({usuarios: arregloUsuarios});    
  }

  render(){
    return (
      <div className="App">
        <Card nombre={this.state.usuarios[0].nombre} edad={this.state.usuarios[0].edad} email={this.state.usuarios[0].email} />
        <Card nombre={this.state.usuarios[1].nombre} edad={this.state.usuarios[1].edad} email={this.state.usuarios[1].email} />
        <Card nombre={this.state.usuarios[2].nombre} edad={this.state.usuarios[2].edad} email={this.state.usuarios[2].email} />
        <CardImage imagen={this.state.noticias[0].imgUrl} titulo={this.state.noticias[0].title} />
        <button onClick={() => this.cambiarNombreFn('Eduardo')}>Cambiar Nombre</button>
      </div>
    );
  }
}

//Componente Funcional
// function App() {

//   let usuarios = [
//     {
//       nombre: "Oscar",
//       edad: 27,
//       email: "oislasreyes@gmail.com"
//     },{
//       nombre: "Luis",
//       edad: 30,
//       email: "luis@gmail.com"
//     },{
//       nombre: "Felipe",
//       edad: 27,
//       email: "felipe@gmail.com"
//     }
//   ];

//   let noticias = [
//     {
//       title: 'Los hospitales enfrentan "una explosión de covid-19"',
//       imgUrl: 'https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200629091315-houston-hostpital-exlarge-169.jpg?quality=100&strip=info&w=105&h=60&crop=1'
//     }
//   ]

//   const cambiarNombreFn = (nuevoNombre) => {
//     usuarios[0].nombre = nuevoNombre;
//     console.log(usuarios[0].nombre);
//   }

//   return (
//     <div className="App">
//       <Card nombre={usuarios[0].nombre} edad={usuarios[0].edad} email={usuarios[0].email} />
//       <Card nombre={usuarios[1].nombre} edad={usuarios[1].edad} email={usuarios[1].email} />
//       <Card nombre={usuarios[2].nombre} edad={usuarios[2].edad} email={usuarios[2].email} />
//       <CardImage imagen={noticias[0].imgUrl} titulo={noticias[0].title} />
//       <button onClick={() => cambiarNombreFn('Eduardo')}>Cambiar Nombre</button>
//     </div>
//   );
// }



export default App;
