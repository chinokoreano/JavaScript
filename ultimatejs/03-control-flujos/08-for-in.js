let user={
    id: 1,
    name: 'Carlitos',
    edad: 20,
}


for (let prop in user)
{
    //console.log(prop);
    console.log(prop,user[prop]);
}

let animales = ['Chanchito','Perro','Gato','Leon'];

for (let indice of animales){
    console.log(indice,animales[indice]);
}