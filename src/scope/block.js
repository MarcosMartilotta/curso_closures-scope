const fruits = () => {
    if (true) {
        var fruits1 = 'apple';
        let fruits2 = 'banana'; //Solo voy a poder acceder dentro de el bloque
        const fruits3 = 'kiwi'; //Solo voy a poder acceder dentro de el bloque
    }

    console.log(fruits1); //En esta si porque var permite ser accedidia fuera de el bloque
    console.log(fruits2); //No se va a imprimir porque esta fuera de el bloque
    console.log(fruits3); //Aca tampoco
}

fruits();

//en este caso voy a imprimir 2 y luego 1, porque let es variable del bloque y luego del global
let x = 1;
{
    let x = 2;
    console.log(x);
}

console.log(x);

//En este caso voy a imprimir 2 las dos veces porque puedo modificar var dentro de un bloque y que cambie al global.

var y = 1;
{
    var y = 2;
    console.log(y);
}

console.log(y);

const anotherFunction = () => {
    for (var i = 0; i < 10; i++){ //Con setTimeout el codigo se ejecuta luego de 1seg, el tema es que var i es una variable global y setTimeout se va a ejecutar luego de un segundo, pero js ejecuta igualmente el for por ello antes de que pase el set timeout i ya tiene el valor 9. Ahora, si cambiamos var por let, como no puede reasignarse en cada iteracion va a esperar a imprimirlo y luego va a ser incrementado, por ello podemos ver la cuenta de 0 a 9.
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

// mejor explicado: [8:42 AM, 5/26/2022] Marcos Martilotta: Para explicar un poco mejor qué fue lo que sucedió con el timeOut, al declarar con “var” la variable “i” dentro del for, lo que estamos haciendo es declarar una variable global llamada “i”, y con cada iteración del for estamos sobreescribiendo esa variable, el for del 1 al 10 se ejecuta en menos de un segundo, es decir, una computadora es rápida ejecutando código, pero el setTimeout se ejecutará después de un segundo, JavaScript NO se va a quedar esperando que cada setTimeout se ejecute, simplemente JavaScript va a ver que hay un setTimeout y lo va a poner en su cola de tareas (Ver el curso de asíncronismo con JavaScript y el curso profesional de JavaScript para entender esto mejor), el caso es que, cuando pasa un segundo, los 10 setTimeouts que JavaScript puso en cola (Uno por cada iteración) se ejecutan, y como “i” es una variable global que fue sobreescrita, se quedo con el último valor de 10 (Porque aunque la condición del último ciclo no se cumplió, la variable si fue asignada para poder evaluar la condición), y es por eso que todos los setTimeouts miran el valor de la variable y todos acaban obteniendo “10”, con let, como saben, no se puede sobreescribir la variable, y tenemos un “let” diferente por cada iteración (Imaginen que cada iteración es un bloque de código totalmente diferente), entonces, cada setTimeout agarra el “let” que está dentro de su propio bloque de código, y como es único gracias al scope, ahí si que se imprimen del 1 al 9:D!
