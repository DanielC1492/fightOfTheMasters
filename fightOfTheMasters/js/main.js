
//Botón de ataque responde

let atk = () =>{
    alert("Está vivo!!!!");
};



//Seleccionar contrincantes funciona

let select = (character) =>{
    console.log("Has seleccionado a..." + character);
    if(p1 = ""){
        p1 = character;

        document.getElementById(character).className = "selected";
        document.getElementById(character).onclick = "";

        let personaje1 = document.getElementById("personaje1");
        personaje1.innerHTML = `You have chosen ${p1.name}`;
    }else{
        p2 = character;
        
        document.getElementById(character).className = "selected";
        document.getElementById(character).onclick = "";

        let mensaje2 = document.getElementById("personaje2");

       // mensaje2.innerHTML = `You have chosen ${p2.name}`;
        



    };
};

//Clases
class Leyenda{
    constructor(name,health,strength,defense,agility,stamina,crit){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.defense = defense;
        this.agility = agility;
        this.stamina = agility * (strength / 1.5);
    };

    ataque(enemy){
         enemy.health -= (this.strength - enemy.defense) * Math.floor(Math.random() * 6);
    };

    crit(enemy){
        enemy.health -= (this.strength - enemy.defense) * this.stamina / Math.floor(Math.random() * 11);
    }
};

//Instancias

let player1 = new Leyenda("sonic", 1000, 200, 250, 400);
let player2 = new Leyenda("samus", 1000, 250, 300, 300);
let player3 = new Leyenda("mario", 1000, 200, 350, 200);
let player4 = new Leyenda("megaman", 1000, 300, 200, 350);

//variables

let p1 = "";
let p2 = "";



//traductor
let allplayers = {
    "sonic": player1,
    "samus": player2,
    "mario": player3,
    "megaman": player4
};