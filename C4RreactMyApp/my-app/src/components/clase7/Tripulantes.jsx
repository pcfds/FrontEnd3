const tripulantes=[
    {
        nombre: 'MR. POINDIBGS', 
    esImpostor : true},
  
    {nombre: 'BONBON', 
    esImpostor : false},
  
    {nombre: 'TITO',
     esImpostor : false},
  
    {
        nombre: 'X-RAY',
     esImpostor : false
    },
  
    {
        nombre: 'FIXFOX',
     esImpostor : false
    },
  ];
  const getTripulantes=(array)=>{
      let resultado=[]
      
    for(let i =0; i < array.length; i++){
        let tripulante = `Nombre: ${array[i].nombre} ${array[i].esImpostor ? 'Es el impostor':'No es el importor'}`
        resultado.push(tripulante)
    }
    return resultado
  }
  export default {tripulantes:tripulantes,getTripulantes:getTripulantes};
  