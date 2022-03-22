import React, {Component} from 'react';
// import Peliculas from '../db/Peliculas';


class Principal extends Component {
    constructor(props) {
    super(props)
    this.state = {
        color:props.color
    }
    this.cambiarColor=this.cambiarColor.bind(this)

}
cambiarColor(){
    this.setState({
        color:"white",
        fondo:"red"
    })

}
    render() {
    
        return (
            <React.Fragment>
            <h1 onClick={this.cambiarColor} 
            style={{color: this.state.color, backgroundColor: this.state.fondo}}>Mi Titulo</h1>
            {this.props.datos.datos.map((p,i)=>{
                return <p key={i.toString()}>{p.name}</p>
             }
            )}
            </React.Fragment>
       
        )
    }
}

export default Principal;   