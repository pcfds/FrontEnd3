const Hola =(props)=>{
    
    return(
        <div>
            <h1 style={{backgroundColor:props.color}}>Bienvenida 
            {props.nombre} {props.apellido} a nuestro equipo!</h1>
        </div>
    )
}
export default Hola;