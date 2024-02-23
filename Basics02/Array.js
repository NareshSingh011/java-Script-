let myArr = [1,2,3,4,5]
// myArr.push(8)
// myArr.pop()
// console.log(myArr)

let myn1  = myArr.slice(0,3)
console.log("A",myArr)
console.log(myn1)

let myn2 = myArr.splice(0,3)
console.log("B",myArr)
console.log(myn2)

// Push

let bolly_heros = ['salman','sharukh','ritik']
let south_heros = ['vijay','dhanush','rajnikanth']
// bolly_heros.push(south_heros)
// console.log(bolly_heros)

//Concat 

let allheros = bolly_heros.concat(south_heros)
console.log(allheros);

// Spread

let allnewheros = [...bolly_heros,...south_heros]
console.log(allheros)

// Flat Array 
let another_array = [1,2,3,4,5,[2,2,3,4,5,[2,5,6,7,3],2,3,4]]
let solve_Array = another_array.flat(Infinity)
console.log(solve_Array);

#naresh Singh


