var animalPopulation = 0;

class Animal {
    // Put your instance variables here

    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        food === this.favoriteFood ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    static getPopulation() {
        return animalPopulation;
    }
}

class Tiger extends Animal {

    constructor(name) {
        super(name,"meat");
    }

}

class Bear extends Animal {

    constructor(name) {
        super(name,"fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");
    }

}

class Unicorn extends Animal {

    constructor(name) {
        super(name,"marshmallows");
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {

    constructor(name) {
        super(name,"leaves");
    }

    eat(food) {
        food === this.favoriteFood ? super.eat(food) : console.log( "YUCK!!! " + this.name + " will not eat " + food);
    }
}

class Bee extends Animal {

    constructor(name,favoriteFood) {
        super(name,"pollen");
    }

    sleep() {
        console.log(this.name + " never sleeps");
    }

    eat(food) {
        if(food === this.favoriteFood) {
            console.log(this.name + " eats " + food);
            console.log("YUM!!! " + this.name + " wants more " + food);
            super.sleep();
        } else {
            console.log( "YUCK!!! " + this.name + " will not eat " + food);
        }
    }
}

class Zookeeper {

    constructor(name) {
        this.name = name;
    }

    feedAnimals(animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " animals of " + animalPopulation + " total animals");
        for(var i in animals) {
            animals[i].eat(food);
        }
    }
}

function run() {

    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rarity = new Unicorn("Rarity");
    var gemma = new Giraffe("Gemma");
    var stinger = new Bee("Stinger");
    var animals = [tigger,pooh,rarity,gemma,stinger];
    var Zoebot = new Zookeeper("Zoebot");
    Zoebot.feedAnimals(animals,"Sticks");
    console.log(Animal.getPopulation());


}