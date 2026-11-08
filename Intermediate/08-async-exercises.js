/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function imprimir(nombre){
  console.log(`Hola, ${nombre}`)
}
  function saludar(nombre, callbackfn){
    setTimeout(callbackfn,2000,nombre) //con setTimeout los parametros de la funcion se pasan despues
  }
  function saludarv2(nombre, callbackfn){
    setTimeout(()=>callbackfn(nombre), 2000)
    /*Lo que pasa aca es que declaramos una funcion, la arrow function, setTimeout la agarra, PRIMERO ESPERA 2 SEGUNDOS y luego ejecuta la funcion y en este caso la arrow function solamente llama a la callbackfn      
    }*/
  }
saludar("juan",imprimir)
saludarv2("pedro",imprimir)
// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

  //me imagino que quiere que nos demos cuenta del callbackHell

function finishJob (){
  console.log("trabajo terminado")
}

function task1(callback){
  setTimeout(()=>{
    console.log("tarea 1 procesada")
    callback()
  },1000)
}

function task2(callback){
  setTimeout(()=>{
    console.log("tarea 2 procesada")
    callback()
  },1000)
}

function task3(callback){
  setTimeout(()=>{
    console.log("tarea 3 procesada")
    callback()
  },1000)
}

task1(()=>{
  task2(()=>{
    task3(finishJob)
  })
})
//programar de esta forma hace que quede codigo que se vea muy mal


// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function isPar(numero) {
  return new Promise((resolve, reject) =>{
    numero % 2 == 0 ? resolve("Numero par") : reject("numero impar")
  })
}
const numero = isPar(3)
numero
  .then(result => {console.log(result)})
  .catch((e)=>{console.log(e)})

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
function firstTask(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      try {
       console.log("Primera tarea completada")
        resolve()
      } catch (error) {
        reject(error)
      }
    },1000)
  })
}
//const t1 = firstTask()
//t1.then(result => {console.log(result)})

function secondTask(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      try {
       console.log("Segunda tarea completada")
        resolve()
      } catch (error) {
        reject(error)
      }
    },2000)
  })
}

function thirdTask(){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      try {
       console.log("Tercera tarea completada")
        resolve()
      } catch (error) {
        reject(error)
      }
    },1500)
  })
}
firstTask()
  .then(secondTask)
  .then(thirdTask)
  .then(()=>{
    console.log("TERMINO!!")
  })

  //function secondTask()
// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

  /**
  *
  * executeTasks es una función async que usa await para esperar que cada promesa se resuelva antes de pasar a la siguiente, ejecutando las tareas en secuencia igual que una cadena de .then, pero escrito como código lineal.
  */
  async function executeTasks(){
  await firstTask() // inicia firstTask y pausa la funcion hasta que se resuelva (1s)
  await secondTask()// recien ahi inicia secondTask y vuelve a pausar (2s)
  await thirdTask() // recien ahi inicia thirdTask y vuelve a pausar (1.5s)
}
executeTasks()
// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

 function getUser(id){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        id < 5 ? resolve({id, nombre: "Usuario " + id}) : reject("Usuario no encontrado")
        },2000)
      
      })  
  }

async function mostrarUsuario(id){
  try {
    const usuario = await getUser(id)
    console.log(usuario)

  } catch (error) {
    console.log(error)
  }
}

mostrarUsuario(4)
mostrarUsuario(6)
// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function promesa1(){
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log("promesa 1 del ej 8 procesada")
      resolve()
    },5000)
  })
}

function promesa2(){
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log("promesa 2 del ej 8 procesada")
      resolve()
    }, 6000)
  })
}

function promesa3(){
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log("promesa 3 del ej 8 procesada")
     resolve()
    },6500 )
  })
}

Promise.all([promesa1(), promesa2(), promesa3()])
  .then(() => {
    console.log("Todas las promesas resueltas")
  })

//version con async/await
async function ejecutarTodas() {
  await Promise.all([promesa1(), promesa2(), promesa3()])
  console.log("Todas las promesas resueltas")
}

ejecutarTodas()
// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

/* version no optima
  function waitSeconds(segundos){
    return new Promise(resolve =>{
      let conversion_a_ms = segundos * 1000
      setTimeout(()=>{
        resolve()
      },conversion_a_ms)
    })
  }
*/
function waitSeconds(segundos) {
  return new Promise(resolve => setTimeout(resolve, segundos * 1000))
}

async function mostrar9(segundos){
  await waitSeconds(segundos)
  console.log("Tiempo finalizado")
}

mostrar9(10)

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
