var hello = 'Hello'; //Var permite ser reasignada 
let letHello = 'Hello World'; //let no permite ser reasignada
const hola = 'Hola'; //Const no permite ser reasignada

//Dentro de una funcion voy a poder acceder a todas las variables globales.

const helloWorld = () => {
    hlobalVar = 'im Global' // Esto es una mala practica, no conviene declarar variables globales dentro de funciones
}
