// java is class based - We need a class to create an obj in Java
// javascript is prototype based - obj extends an obj 
// In JS - Objects can exist without a class = DYNAMIC objects - That's the key-value pair structure -We can add/delete the properties freely.

// object literal — no class
//const student1 = { name: "Athira", role: "SDET" };

// Object inside a Class
class Student {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    greet() {
        return `Hi ${this.name}`;
    }
}
const student2 = new Student("Athira", "SDET");
const student3 = new Student("Beena");// here role becomes undefined

console.log(student2)
console.log(student3)