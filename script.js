// DataStructuresExercise

// 1a
const jedi = [];

// 1b
// jedi[jedi.length] = "Luke";
// This doesn't include "Luke" in an array.

jedi[0] = "Luke";

// 1c
jedi.push("Obi-Wan Kenobi");

// 1d
jedi.unshift("Yoda");

// 1e
console.log(jedi[1]);

// 1f
// jedi.pop();

const force = jedi.pop();
console.log(jedi);

// 1g
jedi.shift();
console.log(jedi);


// jedi.splice(0,1);
// console.log(jedi.slice(1));

// 2a
const sithLords = [
    "Darth Vader",
    "Darth Sidious", 
    "Darth Maul"];

// 2b
const imperialOfficers = [
    "Grand Moff Tarkin", 
    "Orson Krennic"];

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d
console.log(starWarsVillains.slice(0,2));

// 3a
const droids = {
    astromech: "R2-D2", 
    protocol: "C-3PO",
    assassin: "IG-88"
};

// 3b
console.log(droids[`astromech`]);

// 3c
console.log(droids.protocol);

// 3d
droids[`assassin`] = `IG-11`;
// or
// droids.assassin = `IG-11`;

// BONUS
// 4
// console.log(sithLords[0][6]);
console.log(starWarsVillains[0][6]);

// 5
console.log(sithLords.slice(-2, -1));
// console.log(starWarsVillains.slice(-4, -3));

// 6a
const starWarsMovies = [
    {
        episodeOne: "The Phantom Menace", 
        episodeTwo: "Attack of the Clones",
        episodeThree: "Revenge of the Sith"
    },
    {
        episodeFour: "A New Hope", 
        episodeFive: "The Empire Strikes Back", 
        episodeSix: "Return of the Jedi"
    },
    {
        episodeSeven: "The Force Awakens", 
        episodeEight: "The Last Jedi", 
        episodeNine: "The Rise of Skywalker"
    }
];

// 6b
starWarsMovies.splice(1, 0, "Solo", "Rogue One");

// console.log(starWarsMovies);
