import logo from './logo.svg';
import './App.css';
import Hola from './components/Hola'
import Footer from './components/Footer'
import Veterinaria from './components/clase5/Veterinaria';
import Perritos from './components/clase5/db/Perritos';
import Children from './components/clase7/Children';
import TodoTripulantes from './components/clase7/Tripulantes'

function App() {
 let lista =TodoTripulantes.getTripulantes(TodoTripulantes.tripulantes);

 
  return (
    
    <div className="container">
      <div className='row'>
      {<Veterinaria perritos={Perritos}>
      <Children nombre="Pepe"/>
      <Children nombre="Juanito"/>
      <Children nombre="Firulais"/>
      </Veterinaria>}
      <ul>
        {lista.map((t,i)=>{
          console.log(t)
        return <li className='color' key={i.toString()}>{t}</li>
      }
        )}
      </ul>
      </div>
      <Hola color="red" key="1" nombre="Felicitas" apellido="Herrera"/>
      <Hola color="beige" nombre="Juan"/>
      <Hola color="yellow" nombre="Pedro"/>
      <Footer color="green"/>
      
    </div>
  );
}

export default App;
