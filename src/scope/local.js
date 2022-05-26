const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(hello); //Aca no se podra accder a hello porque es una variable local de la funcion helloWorld.

var scope = 'i am global';


const functionScope = () => {
    var scope = "i am just a local";
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope(); //En este caso pasa algo muy particular, scope imprime i am just local, porque para la funcion func, esa variable scope es la global. A esto se le llama ambito léxico y funciona de la siguiente manera: Lexical Scope / Ámbito Léxico: El intérprete de JavaScript funciona desde el ámbito de ejecución actual y funciona hasta encontrar la variable en cuestión. Si la variable no se encuentra en ningún ámbito, se genera una excepción.
/* 
Este tipo de búsqueda se llama ámbito léxico. El alcance de una variable se define por su ubicación dentro del código fuente, y las funciones anidadas tienen acceso a las variables declaradas en su alcance externo. No importa de dónde se llame una función, o incluso cómo se llama, su alcance léxico depende solo de dónde se declaró la función. */