// Import stylesheets
import './style.css';

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; //xp is always zero for new characters
  }

  //Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
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


