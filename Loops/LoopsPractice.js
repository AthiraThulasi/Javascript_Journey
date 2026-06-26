
// Loops repeat a line of code or block of code

for(let i = 0; i<=10; i++){ //code block
    console.log(i)
    console.log("Athira")
}

// Without curly braces, only the first statement immediately following the loop is executed repeatedly. Any statements after that are executed only once, after the loop finishes.
for(let i = 0; i<=10; i++) // No code block
    console.log(i)
    console.log("Athira")

 // while

 //while(1){ // While excecutes wen condition is true // 1 is truthy value 
   // console.log("Athira") // Athira gets printed
 //}

 while(undefined){ // undefined is falsy value // so no o/p
    console.log("Athira")
 }

 let i = 0; // intialization
 while(i<10){ // condition
    console.log("print o/p")
    i++ // increment
 }
//doWhile

do { // do gets excecuted once even if condition is false
    console.log("Athira")

}

while (undefined)


    do { // do gets excecuted once even if condition is false
    console.log("works as value inside while is truthy")

}

while (1)