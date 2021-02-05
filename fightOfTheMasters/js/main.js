//variables

let p1 = "";
let p2 = "";
let p3 = "";
let p4 = "";



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

    atack(enemy) {
        enemy.health += (this.strength - enemy.defense) * Math.floor(Math.random() * 6);
    };

    crit(enemy) {
        enemy.health -= this.strength;
    }
};

//Instancias

let player1 = new Leyenda("sonic", 1000, 200, 300, 400);
let player2 = new Leyenda("samus", 1000, 250, 350, 300);
let player3 = new Leyenda("mario", 1000, 200, 400, 200);
let player4 = new Leyenda("megaman", 1000, 300, 250, 350);

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


let atk = () => {
    let turn = Math.floor(Math.random() * 2);
    let critAtk = Math.floor(Math.random() * 7);

    if (turn = 0)  {
        if (critAtk == 3) {
            console.log("Critical Hit!!!");
            player1.crit(player2);
        } else {

            player1.atack(player2);
            console.log("Golpe!")

        }
    } else {
        if (critAtk == 3) {
            console.log("Critical Hit!!!");
            player2.crit(player1);
        } else {

            player2.atack(player1);
            console.log("Golpe2!!")
        };

    };



    console.log(player1.health);
    console.log(player2.health);
};

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