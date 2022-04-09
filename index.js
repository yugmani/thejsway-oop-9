// Import stylesheets
import './style.css';

// JavaScript classes
// **************************************

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; //xp is always zero for new characters
    //added for character inventory exercise
    this.gold = 10;
    this.key = 1;
  }

  //Return the character description
  describe() {
    //preliminary exercise
    // return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;

    //for character inventory exercise
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
  }

  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        const bonusGold = 10;
        const bonusKey = 1;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
        );
        this.xp += bonusXP;
        this.gold += bonusGold;
        this.key += bonusKey;
      }
    } else {
      console.log(`{this.name} can't attack (they've been eliminated)`);
    }
    //Return the character description
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.key} key(s)`;
  }
}

const aurora = new Character('Aurora', 150, 25);
const glacius = new Character('Glacius', 130, 30);

//Aurora is harmed by an arrow
aurora.health -= 20;

//Aurora gains a strength necklace
aurora.strength += 10;

//Aurora learns a new skill
aurora.xp += 15;

console.log(aurora.describe()); //Aurora has 130 health points, 35 as strength and 15 XP points
console.log(glacius.describe()); //Glacius has 130 health points, 30 as strength and 0 XP points

//Under the hood: objects and prototypes
/* ******************************************* */

const anObject = {
  myProp: 2,
};

//Create anotherObject using anObject as a prototype
const anotherObject = Object.create(anObject);

console.log('Another Object: ', anotherObject.myProp); //Another Object: 2
// In this example, the JavaScript statement Object.create() is used to create the object anotherObject with object anObject as its prototype.

anotherObject.myProp = 102;
console.log(anotherObject.myProp); //102

// Create yetAnotherObject using anotherObject as a prototype
const yetAnotherObject = Object.create(anotherObject);

//// myProp is found in yetAnotherObject's prototype chain (in anObject)
console.log('yetAnotherObject: ', yetAnotherObject.myProp); //yetAnotherObject: 102

// myOtherProp can't be found in yetAnotherObject's prototype chain
console.log(yetAnotherObject.myOtherProp); //undefined

//Monsters and fights, of course!
// ****************************************

// Following is how a fight will be handled. If attacked, a character sees their life points decrease from the strength of the attacker. If its health value falls below zero, the character is considered dead and cannot attack anymore. Its vanquisher receives a fixed number of 10 experience points.

//First, let's add the capability for our characters to fight one another. Since it's a shared ability, we define it as a method named attack() in the Character class.

//Attack a target;

//Now we can introduce a monster in the game and make it fight our players. Here's the rest of the final code of our RPG.

console.log('Welcome to the adventure! Here are our heroes:');
console.log(aurora.describe()); //Aurora has 130 health points, 35 as strength and 15 XP points
console.log(glacius.describe()); //Glacius has 130 health points, 30 as strength and 0 XP points
console.log('********************************');

const monster = new Character('Spike', 40, 20);
console.log("A wild monster was appeared: it's named " + monster.name);

monster.attack(aurora);
// Spike attacks Aurora and causes 20 damage points
//Aurora has 110 health points left
monster.attack(glacius);
// Spike attacks Glacius and causes 20 damage points
// Glacius has 110 health points left

console.log('********************************');
aurora.attack(monster);
// Aurora attacks Spike and causes 35 damage points
// Spike has 5 health points left
glacius.attack(monster);
// Glacius attacks Spike and causes 30 damage points
// Glacius eliminated Spike and wins 10 experience points
console.log('********************************');

console.log(aurora.describe());
// Aurora has 110 health points, 35 as strength and 15 XP points
console.log('********************************');
console.log(glacius.describe());
// Glacius has 110 health points, 30 as strength and 10 XP points
console.log('********************************');

// Coding time!
// ***************************************

// Dogs
// -----------------------------------------
// Complete the following program to add the definition of the Dog class.

// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".

// TODO: define the Dog class here
class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }

  bark() {
    if (this.size > 60) {
      return 'Grrr! Grrr!';
    } else {
      return 'Woof! Woof!';
    }
  }
}

const fang = new Dog('Fang', 'boarhound', 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`); //Fang is a boarhound dog measuring 75
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
// Look, a cat! Fang barks: Grrr! Grrr!

console.log('********************************');

const snowy = new Dog('Snowy', 'terrier', 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
//Snowy is a terrier dog measuring 22
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
// Look, a cat! Snowy barks: Woof! Woof!

// Character inventory
// ----------------------------------------------

// Improve the example RPG to add character inventory management according to the following rules:

// A character's inventory contains a number of gold and a number of keys.

// Each character begins with 10 gold and 1 key.

// The character description must show the inventory state.

// When a character slays another character, the victim's inventory goes to its vanquisher.

// ****** code is improved above ******

//Output
//Aurora has 130 health points, 35 as strength and 15 XP points, 10 gold and 1 key(s)
// Glacius has 130 health points, 30 as strength and 0 XP points, 10 gold and 1 key(s)

//Aurora has 110 health points, 35 as strength and 15 XP points, 10 gold and 1 key(s)
//Glacius has 110 health points, 30 as strength and 10 XP points, 20 gold and 2 key(s)

// Account list
// -------------------------------------

// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name property.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, another to Brad and the third one to Georges. These accounts are stored in an array. Next, the program credits 1000 to each account and shows its description.

class Account {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.balance = 0; //intiatially set to 0
  }

  credit() {
    this.balance += this.value;
    console.log(`$${this.value} is credited to ${this.name}'s account`);
  }

  describe() {
    return console.log(`owner: ${this.name}, balance: ${this.balance}`);
  }
}

let createAccounts = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let varName = arr[i].toLowerCase();
    varName = new Account(arr[i], 1000);
    varName.credit();
    varName.describe();
  }
};

let accounts = ['Sean', 'Brad', 'Georges'];

createAccounts(accounts);
// $1000 is credited to Sean's account
// owner: Sean, balance: 1000
// $1000 is credited to Brad's account
// owner: Brad, balance: 1000
// $1000 is credited to Georges's account
// owner: Georges, balance: 1000
