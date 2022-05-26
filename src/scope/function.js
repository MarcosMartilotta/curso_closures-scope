const fruits = () => {
    var fruit = 'apple';
    console.log(fruit);
};

fruits();

const anotherFunction = () => {
    var x = 1;
    var x = 2; //Var si va a permitir reescribir, conviene usar let.
    let y = 1;
    /* let y = 2; */
    console.log(x);
    console.log(y);
}