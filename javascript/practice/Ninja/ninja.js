class Ninja {
    constructor(name,health,speed,strength) {
        this.name = name;
        this.health = health || 90;
        this.speed = speed || 3;
        this.strength = strength || 3;
    }
    
    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank a sake and gained 10 health points`);
    }