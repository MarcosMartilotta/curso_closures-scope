const person = () => {
    var saveName = "name";
    return {
        getname: () => {
            return saveName;
        },
        setName: (name) =>{
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('Oscar');
console.log(newPerson.getName());

//A saveName no podemos acceder nunca fuera de la funcion de forma directa, tenemos que hacerlo a travez de closures