//const pi =3.14;
//pi = 10;
//console.log(pi); // TypeError: Assignment to constant variable.

const data = {name: "Athira"} // constant can store object // data is pointing to Athira // pointer can't be changed
data.name = "Neil" // value can be changed
console.log(data)

//data = {name: "Neil"} // not allowed// pointer can't be changed

const arr = [10,50,60]
console.log(arr)
arr[0] = 100 // modifying the value
console.log(arr)

arr = [ 70,50,30]//but can't change the pointer // 
TypeError: Assignment to constant variable.