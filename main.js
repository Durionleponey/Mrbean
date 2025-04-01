

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

function caca(){
    console.log("baltrou");
    return robin;
}
