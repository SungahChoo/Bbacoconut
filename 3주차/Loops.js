//<Repeating Tasks Manually>
let vacationSpots = ['Chicago', 'Australia', 'Canada'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);



//<The For Loop>
for(let i=5; i<=10; i++) {
    console.log(i);
}



//<Looping in Reverse>
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}



//<Looping through Arrays>
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i=0; i<vacationSpots.length; i++) {
    console.log("I would love to visit " + vacationSpots[i]);
}



//<Nested Loops>
let bobsFollowers = ['Peter', 'John', 'Frank', 'Emily'];
let tinasFollowers = ['Frank', 'Emily', 'Nina'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}



//<The While Loop>
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while(currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}



//<Do...While Statements>
let cupsOfSugarNeeded = 7;
let cupsAdded = 0;

do {
    cupsAdded++;
    console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);



//<The break Keyword>
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for(let i=0; i<rapperArray.length; i++) {
    console.log(rapperArray[i]);

    if (rapperArray[i] === 'Notorious B.I.G.') {
        break;
    }
}


console.log("And if you don't know, now you know.");