//Persona de TV


let personaje ={
    nombre:"Carlos",
    anime: "Picapiedra",
    edad: 16,
}
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje.anime);
console.log(personaje.edad);

console.log(personaje['anime']);

personaje.edad=45;
let llave="edad";
personaje[llave] = 80;


console.log(personaje);
delete personaje.anime;

console.log(personaje);