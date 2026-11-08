/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones
/*fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>{
  //se transforma los datos a json
   return response.json()
}).then(data =>{
  //la respuesta que se retorno arriba en formato json
  //ahora se muestra por consola
  console.log(data)
}).catch(e =>{
  console.log("Error: ",e)
})*/

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
/*
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>{
  if (!response.ok){
    throw Error ("La respuesta a ido mal, Status HTTP: ", response.status)
  }
  return response.json()
}).catch(e => {
  console.log("Error: ", e)
})*/
// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getPost(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const responseJSON = await response.json() //muy importante este await de aca ya que si no esta
  // responseJSON sera una promesa pero estara en estado pendiente ya que sin el await no espera a que se procese la respuesta
  console.log(responseJSON)
}
console.log("/*/*/*/*/")
getPost()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API
