class Ninja {
    constructor(name, health=90, speed=3, strength=3) {
        this.name = name;
        this.health = health ;
        this.speed = speed ;
        this.strength = strength ;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank a sake and gained 10 health points`);
    }
}

class Sensei extends Ninja {
    constructor(name, health=200,strength=10,wisdom=10) {
        super(name,health,strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}