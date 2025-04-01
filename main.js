

class pomme{
    constructor(nom){
        this.nom = nom;
    }

    sayHello(){
        return console.log("Hello", this.nom);
    }

}


robin = new pomme("robin");

console.log(robin.sayHello());

