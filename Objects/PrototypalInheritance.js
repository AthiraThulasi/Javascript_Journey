
// JavaScript uses prototypal inheritance — objects inherit directly from other objects through the prototype chain, unlike Java's class-based inheritance.

const animal = {
    eats: true,
    sleep() { return "zzz"; }
};

const dog = {
    barks: true
};

Object.setPrototypeOf(dog, animal);   // dog's prototype = animal

console.log(dog.barks);   // true  — found on dog itself
console.log(dog.eats);    // true  — NOT on dog → JS walks up to prototype (animal) → found!
dog.sleep();              // "zzz" — inherited the METHOD too, from a plain object!