// import "./App.css";
// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hour: new Date(),
//     }
//   }
//   componenDidMount() {
//     this.time = setInterval(() => {
//       this.setState({ hour: new Date(),
//       });
//     }, 1000);
//   }

//   render() {
//     return (
//       <div className="App">
//         <h2>{this.state.hour.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pedido: "",
    }
  }

  componentDidMount(){
    this.time = setTimeout(() => {
      this.setState({
        Pedido: "Pizzas",
      })
    }, 2000);

   
  
  }
  componentDidUpdate() {
    console.log("El estado se actualizó");
    //console.log(2, "El estado o las props del componente han cambiado");
  
  }
 
 
  cancelarPedido(){
     alert("El pedido ha sido cancelado")
     console.log("El pedido ha sido cancelado");
   }

   
  render() {
    const { Pedido } = this.state;
    return (
      <>
        <h2> Tu Pedido: {Pedido}</h2>
        <button onClick={()=>this.cancelarPedido()}>Cancelar Pedido</button>
      </>
    );

  }
}

export default App;
