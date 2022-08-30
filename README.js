/* ## Consignas
1. Copiar las funciones en un archivo JavaScript.
2. Simplificar la composición de los strings.
3. Simplificar escritura de los objetos literales.
4. Transformar las funciones básicas en funciones flecha.
5. Crear un repositorio con el nombre ES6-miNombre (nombre de cada uno de ustedes) y subir las soluciones a Github a través de la consola o GitHub Desktop. */


//JS
const saludar = (nombre)=> `Hola ${nombre}`

// Mostrar el resultado por consola
console.log(saludar('Alejandro'));

//JS
const multiplicar = (a, b)=> a*b

// Mostrar el resultado por consola
console.log(multiplicar(3, 15));



//JS
const crearAlumno = (nombre, apellido, edad, materias)=>{
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        materias: materias
    }}

// Mostrar el resultado por consola.
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))



//JS
const devolverFecha = (dia, mes, año)=> `Hoy es ${dia}-${mes}-${año}`

// Mostrar el resultado por consola.
console.log(devolverFecha('10','09','2022'));