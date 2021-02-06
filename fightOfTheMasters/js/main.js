//variables

let p1 = "";
let p2 = "";
let p3 = "";
let p4 = "";

//Clases

class Leyenda {
    constructor(name, health, strength, defense, agility, stamina, crit) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.defense = defense;
        this.agility = agility;
        this.stamina = Math.floor(agility + (strength / 1.5));
    };

    atack(enemy) {
        enemy.health += this.strength - (enemy.defense / 0.5);
    };

    crit(enemy) {
        enemy.health -= this.strength + (this.stamina / 2);
    };
};

//Instances

let player1 = new Leyenda("SONIC", 1000, 200, 300, 400);
let player2 = new Leyenda("SAMUS", 1000, 250, 350, 300);
let player3 = new Leyenda("MARIO", 1000, 200, 400, 200);
let player4 = new Leyenda("MEGAMAN", 1000, 300, 250, 350);

//Character selection

let select = (playerTag) => {
    if (p1 == "") {
        p1 = allPlayers[playerTag];

        let personaje1 = document.getElementById("personaje1");
        personaje1.innerHTML = `You have chosen ${p1.name}`;
    } else {
        p2 = allPlayers[playerTag];

        let personaje2 = document.getElementById("personaje2");

        personaje2.innerHTML = `You have chosen ${p2.name}`;
        resolveIn(2000).then(delay => {
            fasingSwitch("chosingFase", "fightingFase");
        });

        let warrior1 = document.getElementById("warrior1");
        let warrior2 = document.getElementById("warrior2");

        warrior1.innerHTML = `<div id="guerrero_${p1.name}" class="warriorStyle" >
            <img  src="fightOfTheMasters/img/${p1.name}.jpg">
            <div class="name">${p1.name}</div>
            <div class="health">${p1.health}</div>
            <div class="strength">${p1.strength}</div>
            <div class="defense">${p1.defense}</div>
            <div class="agility">${p1.agility}</div>
            <div class="stamina">${p1.stamina}</div>

        </div>`;
        warrior2.innerHTML = `<div id="guerrero_${p2.name}" class="warriorStyle" >
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

//fase switching

let fasingSwitch = (faseNow, faseThen) => {
    let currentFase = document.getElementById(faseNow);

    let nextFase = document.getElementById(faseThen);


    currentFase.style.display = "none";
    nextFase.style.display = "flex";
};

//delay function

const resolveIn = delay =>
    new Promise(res => setTimeout(() => res(delay), delay));

//Combat

let atk = () => {

    let changingHealth = document.getElementsByClassName("health");
    let turno = Math.floor(Math.random() * 2);
    let critHit = Math.floor(Math.random() * 5);

    if (turno == 0) {
        if (critHit == 3) {
            console.log("Player 1 Crit hit");
            player1.crit(player2);
        } else {

            player1.atack(player2);
            console.log("ataque 1");

        }
    } else {
        if (critHit == 3) {
            console.log("Player 2 Crit hit");
            player2.crit(player1);
        } else {
            player2.atack(player1);
            console.log("ataque 2")
        }
    };

    changingHealth.innerHTML = `<div class="health">${p1.health}</div>`;
    console.log("Vida 1:" + player1.health);
    console.log("Vida 2:" + player2.health);

    let showWinner = document.getElementById("winnerPic");
    let showWinnerText = document.getElementById("winnerText");

    if (player1.health <= 0) {
        console.log("player2 wins");
        showWinner.innerHTML = `<img id="winnerPic" src="fightOfTheMasters/img/${p2.name}.jpg">`;
        showWinnerText.innerHTML = `<div id="winnerText">${p2.name} WINS!!!</div>`;
        fasingSwitch("fightingFase", "winnerFase");
        resolveIn(5000).then(delay => {
            fasingSwitch("winnerFase", "chosingFase");
        });
    } else if (player2.health <= 0) {
        console.log("Player1 wins");
        showWinner.innerHTML = `<img id="winnerPic" src="fightOfTheMasters/img/${p1.name}.jpg">`;
        showWinnerText.innerHTML = `<div id="winnerText">${p1.name} WINS!!!</div>`;
        fasingSwitch("fightingFase", "winnerFase");

    };

};

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    window.location.reload();
})

//traductor

let allPlayers = {
    "sonic": player1,
    "samus": player2,
    "mario": player3,
    "megaman": player4
};

function playSound() {
    document.getElementById('play').play();
};

function nintendoPlay() {
    document.getElementById('nintendoImg').play();
};

function segaPlay() {
    document.getElementById('segaImg').play();
};