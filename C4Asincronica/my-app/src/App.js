import './App.css';
// import Hola from './componentes/Hola';
// import Footer from './componentes/Footer';
import Veterinaria from "./componentes/clase6/Veterinaria";
import Perritos from './componentes/clase6/Perritos';
function App() {
    return (
    <div className="App">
      {/* <Hola color="red" nombre="Felicita " apellido="Reyes"/>
      <Hola color="green" nombre="Juan" apellido="Cruz"/>
      <Hola color="yellow" nombre="Pepi" apellido="Dias"/>
      <Footer/> */}
      <Veterinaria perritos={Perritos}/>
    </div>
  );
}

export default App;