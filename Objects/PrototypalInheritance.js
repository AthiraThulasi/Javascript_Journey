
// JavaScript uses prototypal inheritance — objects inherit directly from other objects through the prototype chain, unlike Java's class-based inheritance.

// ============================================
// DEMO 1: setPrototypeOf —  RAW mechanism 
// ============================================
const animal = {
    eats: true,
    sleep() { return "zzz"; }
};

const dog = {
    barks: true
};

Object.setPrototypeOf(dog, animal);

console.log(dog.barks);        // true — own property
console.log(dog.eats);         // true — found via prototype chain
console.log(dog.sleep());      // "zzz" — note: console.log added to SEE the result!
console.log(Object.keys(dog)); // ["barks"] — proof nothing was copied!


// ============================================================
// DEMO 2: Object.create — the preferred - pure prototype way
// ============================================================
const cat = Object.create(animal);   // born WITH animal as prototype
cat.meows = true;

console.log(cat.meows);   // true — own
console.log(cat.eats);    // true — delegated to animal
console.log(cat.sleep()); // "zzz"


// ============================================
// DEMO 3: class + extends 
// ============================================
class Animal {
    constructor(name) {
        this.name = name;
    }
    sleep() {
        return `${this.name} says zzz`;
    }
}

class Dog extends Animal {           // extends wires the prototype chain!
    bark() {
        return `${this.name} says Woof!`;
    }
}

const tommy = new Dog("Tommy");
console.log(tommy.bark());    // "Tommy says Woof!" — own class method
console.log(tommy.sleep());   // "Tommy says zzz" — inherited via prototype chain


//===================================================================================
//  WHO'S THE PROTOTYPE? — comparison of object creation methods
//===================================================================================
//  | Creation               | Prototype of the new object                          |
//  |------------------------|------------------------------------------------------|
//  | {} (literal)           | Object.prototype (default — toString() etc. live here)|
//  | new Object()           | Object.prototype (same as literal)                   |
//  | Object.create(animal)  | animal — WE choose!                             |
//  | Object.create(null)    | NOTHING — no prototype at all (bare dictionary)      |
//  | new Dog("Tommy")       | Dog.prototype (the class wires it)                   |
//=====================================================================================