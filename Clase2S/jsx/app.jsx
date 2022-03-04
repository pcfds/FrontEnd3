// // const create = React.createElement;

// // const span = create(
// //     'span',
// //     {key:2},
// //     'Mundo!'
// // )

// // const p = create(
// //     'p',
// //     {key:1},
// //     ['Hola ' ,span]


// )


const p = <p> Soy un Salo</p>;
function App(){
    return(
        <div>
        <h1> El mundo de Salo</h1>

        <h2> Otro mundo de Salo</h2>
        
        <h3>Yo vivo en el mundo de Salo</h3>

        <h4> ¿Quien es Salo?</h4>

        {p}

        {100*25} Es la multiplicacion de 100 * 25
        

        </div>
        
    )

}
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)

