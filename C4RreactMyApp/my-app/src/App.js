import React, { Component } from 'react'
import Button from './components/Clase8Practica/Button'
import "./App.css";

export default class App extends Component {
 

  constructor(){
    super();
    this.state = {
      colors: ["RED","BLUE","YELLOW", "GREEN","ORANGE","MAGENTA","BROWN","LIME"]

    }
  }

  shuffle = () => {

    const colorRandom = this.state.colors.sort(()=>Math.random() - 0.5 );
    console.log(colorRandom);
    this.setState({colors: colorRandom})


  }

    /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */


  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */

  
  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.shuffle} />
      </div>

    )
  }
}




// import './App.css';
// import Hola from './components/Hola'
// import Footer from './components/Footer'
// import Veterinaria from './components/clase5/Veterinaria';
// import Perritos from './components/clase5/db/Perritos';
// import Children from './components/clase7/Children';
// import TodoTripulantes from './components/clase7/Tripulantes';
// import Peliculas from './components/clase8/db/Peliculas';
// import Principal from './components/clase8/componenteClase/Principal';

// function App() {

//   return (

//     <Principal color="red" datos={{datos:Peliculas}}/>
    
//     // <div >

      
//     //   {/* {<Veterinaria perritos={Perritos}>
//     //   <Children nombre="Pepe"/>
//     //   <Children nombre="Juanito"/>
//     //   <Children nombre="Firulais"/>
//     //   </Veterinaria>}
//     //   <ul>
//     //     {lista.map((t,i)=>{
//     //       console.log(t)
//     //     return <li className='color2' key={i.toString()}>{t}</li>
//     //   }
//     //     )}
//     //   </ul>
   
//     //   <Hola color="red"  key="1" nombre="Felicitas" apellido="Herrera"/>
//     //   <Hola color="beige"  nombre="Juan"/>
//     //   <Hola color="yellow"  nombre="Pedro"/>
//     //   <Footer color="green"/> */}
      
//     // </div>
//   );
// }

// export default App;
