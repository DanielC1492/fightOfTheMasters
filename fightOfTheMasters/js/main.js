//Botón de ataque responde

let atk = () => {
    let turn = Math.floor(Math.random() * 2);
    let critHit = Math.floor(Math.random() * 5);

    if (turn = 0)  {
        if (critHit == 5) {
            console.log("Critical Hit!!!");
            player1.
        }
    }
};

let resetGame = () => {
    let initHealth = 1000;

    player1.vida = initHealth;
    player2.vida = initHealth;
};

//Clases
class Leyenda {
    constructor(name, health, strength, defense, agility, stamina, crit) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.defense = defense;
        this.agility = agility;
        this.stamina = Math.floor(agility * (strength / 1.5));
    };

    ataque(enemy) {
        enemy.health -= (this.strength - enemy.defense) * Math.floor(Math.random() * 6);
    };

    crit(enemy) {
        enemy.health -= (this.strength - enemy.defense) * this.stamina / Math.floor(Math.random() * 11);
    }
};

//Instancias

let player1 = new Leyenda("sonic", 1000, 200, 250, 400);
let player2 = new Leyenda("samus", 1000, 250, 300, 300);
let player3 = new Leyenda("mario", 1000, 200, 350, 200);
let player4 = new Leyenda("megaman", 1000, 300, 200, 350);

let select = (playerTag) => {
    //console.log("Has seleccionado a..." + character);
    if (p1 == "") {
        p1 = allPlayers[playerTag];

        let personaje1 = document.getElementById("personaje1");
        personaje1.innerHTML = `You have chosen ${p1.name}`;
    } else {
        p2 = allPlayers[playerTag];

        let personaje2 = document.getElementById("personaje2");

        personaje2.innerHTML = `You have chosen ${p2.name}`;

        fasingSwitch("chosingFase", "fightingFase");

        let guerrero1 = document.getElementById("guerrero1");
        let guerrero2 = document.getElementById("guerrero2");

        guerrero1.innerHTML = `<div id="guerrero_${p1.name}" class="estiloGuerrero" >
            <img  src="fightOfTheMasters/img/${p1.name}.jpg">
            <div class="name">${p1.name}</div>
            <div class="health">${p1.health}</div>
            <div class="strength">${p1.strength}</div>
            <div class="defense">${p1.defense}</div>
            <div class="agility">${p1.agility}</div>
            <div class="stamina">${p1.stamina}</div>

        </div>`;
        guerrero2.innerHTML = `<div id="guerrero_${p2.name}" class="estiloGuerrero" >
        <img  src="fightOfTheMasters/img/${p2.name}.jpg">
        <div class="name">${p2.name}</div>
        <div class="health">${p2.health}</div>
        <div class="strength">${p2.strength}</div>
        <div class="defense">${p2.defense}</div>
        <div class="agility">${p2.agility}</div>
        <div class="stamina">${p2.stamina}</div>

    </div>`;



    };

    document.getElementById(playerTag).classList.add("selected");
    document.getElementById(playerTag).onclick = "";
};



//variables

let p1 = "";
let p2 = "";
let p3 = "";
let p4 = "";

//Seleccionar contrincantes funciona



//funciones

let fasingSwitch = (faseNow, faseThen) => {
    let currentFase = document.getElementById(faseNow);

    let nextFase = document.getElementById(faseThen);


    currentFase.style.display = "none";
    nextFase.style.display = "block";
};


//traductor
let allPlayers = {
    "sonic": player1,
    "samus": player2,
    "mario": player3,
    "megaman": player4
};