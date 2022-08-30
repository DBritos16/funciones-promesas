/* # Trabajando con Promesas

> 1. Transformar todas las funciones declarativas en funciones flecha.

> 2. Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.

> 3. Simplificar el código de las funciones.

> 4. Transformar la función **funcionCuatro()** en una función asíncrona con la palabra reservada __async__ e implementarla junto con **await**. */

//JS
    // Promesa almacenada en una constante
    const promesa = new Promise((resolve, reject)=>{
        ( 10 === 11)
        ?resolve('Los valores son iguales')
        :reject('Los valores son distintos')

    });

    promesa.then(res=>console.log(res)).catch(err=>console.log(err))


//JS
    // Promesa dentro en una función.
    const promesaDos = (provincia)=>{
        return new Promise( (resolve, reject)=> {
                ('Formosa' === provincia)
                ? resolve('Usted está ubicado en Formosa')
                : reject('Error al realizar la consulta')
        });
    }

    promesaDos("Formosa").then(res=>console.log(res)).catch(err=>console.log(err))

//JS
    const promesaTres = (valorBooleano)=>{
        return new Promise( (resolve, reject)=> {
            ( true === valorBooleano )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
    }

    promesaTres(true).then(res=>console.log(res)).catch(err=>console.log(err))
        

//JS
    const promesaCuatro = async (arguments)=>{
        return await new Promise( (resolve, reject)=> {
            ( true === arguments )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
}

    promesaCuatro(false).then(res=>console.log(res)).catch(err=>console.log(err))
