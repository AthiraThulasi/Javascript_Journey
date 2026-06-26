//Array in js is an object

let names = [`Athira`,`Beena`,`Thulasi`]
    console.log(names[0])
    console.log(names[1])
    console.log(names[2])

// Traversing through array using for loop
    for(let index = 0;index < names.length;index++){
        console.log(names[index])
    }

    console.log(" ".repeat(20)) // for...of → gives actual array values
    for(let x of names)
        console.log(x)

    console.log(" ".repeat(30)) // for...in → gives indices
    for(let z in names)
        console.log(z)
        console.log(names["0"])