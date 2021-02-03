
//Variables globales

let p1 = "";
let p2 = "";

//Clases globales

class Luchador {
    constructor(nombre,vida,fuerza,defensa,agilidad,stamina,crit){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.agilidad = agilidad;
        this.stamina = stamina;
        this.crit = fuerza * 2 / Math.floor(Math.random() * 6);

    };

    ataque(enemigo){
        enemigo.vida -= (this.fuerza - this.defensa.enemigo) * (this.stamina / 10);
    };

    crit(enemigo){
        enemigo.vida -= (this.fuerza * 2 / this.agilidad.enemigo);
    };

};

//Instancias

    let primerPJ = new Luchador("alexKidd",500,100,200,300,250);
    let segundoPJ = new Luchador("donkey Kong",500,200,250,100,110);
    /*let tercerPJ = new Luchador("golden Axe",500,200,250,200,200);
    let cuartoPJ = new Luchador("Mario",500,100,200,250,200);
    let quintoPJ = new Luchador("Megaman",500,150,200,300,250);
    let sextoPJ = new Luchador("samus",500,150,200,250,200);
    let septimoPJ = new Luchador("Sonic",500,100,200,350,250);
    let octavoPJ = new Luchador("Princess Zelda",500,100,200,350,300);*/


//funciones

let selectCharacter = (firstFighter) => {
    if(p1 == ""){
        p1 = character;
        document.getElementById(alexKidd) = "avatar";
    }else{
        p2 = character;
        document.getElementById(donkeyKong) = "avatar2";
    };
};

let hitClick = () => {
    let turno = Math.floor(Math.random() * 2);
    let crit = Math.floor(Math.random() * 10);


     //Turnos y combate

     if(turno == 0){
         if(crit == 3){
             console.log("Golpe crítico!!!!!");
             primerPJ.crit(segundoPJ);
         }else{
            primerPJ.ataque(segundoPJ);
         }

     };



};


        











/*let selectPersonaje = (fighter) => {
    if(arrayTeam1.length < 3){
        //Introducimos luchador en el array A
        arrayTeam1.push(fighter);
        document.getElementById(fighter).className = "elegido";
        document.getElementById(fighter).onclick = "";

        if(arrayTeam1.length == 3){
            //Eliminamos a los personajes ya escogidos.
            for(let i = 0; i < arrayTeam1.length; i++){
                document.getElementById(arrayTeam1[i]).style = "visibility : hidden";
            };
        };

    }else if(p1.length < 3){
        //Introducimos luchador en el array B
        arrayTeam2.push(fighter);
        document.getElementById(fighter).className = "elegido";
        document.getElementById(fighter).onclick = "";

        if(arrayTeam2.length == 3){
            //Eliminamos a los personajes ya escogidos.
            for(let i = 0; i < arrayTeam2.length; i++){
                document.getElementById(arrayTeam2[i]).style = "visibility : hidden";
            };
        };

    };

    console.log("Team Sega: ", arrayTeam1);
    console.log("Team Nintendo: ", arrayTeam2);
};

let arrayTeam1 = [];

let arrayTeam2 = [];*/