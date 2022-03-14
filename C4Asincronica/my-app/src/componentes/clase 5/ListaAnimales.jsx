import React from "react";

const animales = [
  {
    nombre: "Firulais",
    edad: 11,
    sexo: "Macho",
    raza: "Pastor Aleman",
    tamanio: "Grande",
    id: 1,
  },
  {
    nombre: "Maya",
    edad: 13,
    sexo: "Hembra",
    raza: "Pug",
    tamanio: "Chico",
    id: 4,
  },
  {
    nombre: "Pipo",
    edad: 5,
    sexo: "Macho",
    raza: "Schnauzer",
    tamanio: "Mediano",
    id: 2,
  },
  {
    nombre: "Pacha",
    edad: 2,
    sexo: "Hembra",
    raza: "Mestizo",
    tamanio: "Chico",
    id: 3,
  },
];

class ListaAnimales extends React.Component {
  render() {
    return (document.getElementById("root").innerHTML = (
      <React.Fragment>
        {animales.map((animal) => (
          <li key={animal.id}>
            <h1>
              <span>Nombre: </span>
              {animal.nombre}
            </h1>
            <p>
              <span>Edad:</span> {animal.edad}
            </p>
            <p>
              <span>Sexo:</span> {animal.sexo}
            </p>
            <p>
              <span>Raza:</span> {animal.raza}
            </p>
            <p>
              <span>Tamaño:</span> {animal.tamanio}
            </p>
          </li>
        ))}
      </React.Fragment>
    ));
  }
}

export default ListaAnimales;
