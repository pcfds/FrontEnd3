function App(){
    return(
        <salo>
        <h1>Lista de Productos en stock:</h1>
      <ul>
        <li>Manzana</li>
        <li>Pera</li>
        <li>Naranja</li>
        <li>Banana</li>
        <li>Kiwi</li>
      </ul>
      {/* {listaSuper} */}
      <h2>Productos en falta:</h2>
      <ul>
        <li>Durazno</li>
        <li>Cereza</li>
        <li>Anana</li>
      </ul>
      </salo>
    )
}

const listaSuper = <ul>
<li>Manzana</li>
<li>Pera</li>
<li>Naranja</li>
<li>Banana</li>
<li>Kiwi</li>
</ul>;

    ReactDOM.render(
        <App/>,
        document.getElementById("root")
    )
    