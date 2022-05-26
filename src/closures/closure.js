const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`moneyBox: $${saveCoins}`);
}

moneyBox(10); 
moneyBox(5);

//Esto me va a imprimir 10 y 5, no estoy generando la estructura de un closure.


const moneyBoxclosure = () => {
    debugger;
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger;
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBoxclosure(); //Aca se ejecuta la funcion moneyBox con la declaracion de saveCoins en 0, luego, cuando llamo a myMoneyBox lo que hago realmente es llamar multiples veces a countCoins.

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);

//Por su parte este codigo si va a hacer la suma, porque en este caso si recuerda en que ambito fue creada saveCoins.