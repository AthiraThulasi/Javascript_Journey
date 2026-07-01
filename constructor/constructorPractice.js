

//================================================
// 1. What if undefined is passed explicitly?
//================================================
class User {
  constructor(name) {
    this.name = name;
    this.role = "QA";
  }
}

let u1 = new User(undefined);
console.log(u1.name); // undefined
console.log(u1); // { name: undefined, role: "QA" }

//=======================================================================================================================
// 2. What is the difference between this and assigning inside constructor - Default parameter vs constructor assignment?
//=======================================================================================================================
 class User1 {
  constructor(name, role = "QA") {
    this.name = name;
    this.role = role;
  }
}

new User1("John");

// Parameter default (role = "QA") happens before the constructor starts running // set before execution starts
// this.role = "QA" runs inside the constructor when that line is executed // set during execution (inside constructor)
// this.role = "QA" → always set QA
// role = "QA" → set QA only if nothing is passed

//=======================================================================================================================
//3. What if null is passed? Will default value QA be used?
//=======================================================================================================================

class User2 {
  constructor(name, role = "QA") {
    this.name = name;
    this.role = role;
  }
}

let u2 = new User2("John", null);
console.log(u2);

// No, "QA" is not used because null is an actual value. Default parameters are used only when the argument is undefined or not passed.
// null is a real value

//=======================================================================================================================
//4. What is the output if no parameter is passed ?
//=======================================================================================================================

class User3 {
  constructor(name) {
    this.role = "QA";
    this.name = name;
  }
}

let u3 = new User3();
console.log(u3); // o/p - User3 { role: 'QA', name: undefined }
// Since no argument is passed, the name parameter becomes undefined. The statement this.role = "QA" still executes

//=======================================================================================================================
//5. What if property is not defined in constructor?
//=======================================================================================================================
class User4 {
  constructor(name) {
    this.name = name;
  }
}

let u4 = new User("John");
console.log(u4.role);  

// Output - undefined // JS does NOT auto-create missing properties.

//=======================================================================================================================
//6. Does every object get its own copy? Is role shared between all objects?
//=======================================================================================================================

class User5 {
  constructor(name) {
    this.name = name;
    this.role = "QA";
  }
}

let u5 = new User5("John");
let u6 = new User5("Mary");

console.log(u5);
console.log(u6);

// Explanation - How it works when we change the role?

u1.role = "Lead QA";

console.log(u5.role); // Lead QA
console.log(u6.role); // QA
//  The role property exists in both objects, but it is not shared. Each object can have a different value.
//  Each object has its own copy, so changing one object's role does not affect the other."


//=======================================================================================================================
//7. What happens if constructor returns something?
//=======================================================================================================================

class User7 {
  constructor(name) {
    this.name = name;
    return { role: "Dev" };
  }
}

let u7 = new User("John");
console.log(u7.name);

// o/p - undefined // The constructor returns: { role: "Dev" } , so u7 becomes - { role: "Dev" }, but object doesn't have a name property > so undefined.
// Normally, new returns the object created using this. But if the constructor explicitly returns another object, JavaScript returns that object instead.

// ====================================================
// 8. Missing argument behavior
// ====================================================

class User8 {
  constructor(name) {
    this.name = name;
    this.role = "QA";   // default value
  }
}

let u8 = new User8();
console.log(u8);
// No argument is passed, so name becomes undefined
// { name: undefined, role: "QA"

// =========================================================================================================
// 9. What is the difference between let role and this.role- Is role a class/object property or a local variable?
// =========================================================================================================

class User9 {
  constructor(name) {
    let role = "QA";
    this.name = name;
    this.role = role;
  }
}

let u9 = new User9("John");
console.log(u9);

// let role = "QA" → Local variable (exists only inside the constructor).
// this.role = role → Object property (stored inside the object).

// ====================================================
// 10. Can constructor parameters be skipped? [IMP]
// ====================================================

class User10 {
  constructor(name, role = "QA", isActive = true) {
    this.name = name;
    this.role = role;
    this.isActive = isActive;
  }
}

let u10 = new User10("John", undefined, false); // default parameters are used when the argument is undefined// everything else 
console.log(u10);                                // isActive = false (argument) → false is a real value, so JavaScript does not use the default value (true)

// O/P- {name: "John", role: "QA", isActive: false}