import React from 'react'
class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:props.color
        }
    }
    cambiar(){
        console.log('Se ejecuto el evento!')
    }
    render(){
        return(
            <footer style={{backgroundColor:this.state.color}}>
                <p onClick={()=>this.cambiar()}>Mi página</p>
            </footer>
        )
    }
}
export default Footer;