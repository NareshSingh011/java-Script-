// const obj1 = {
//     name : "Naresh Singh",
//     age : 20,
//     Email : "naresh.s.asht@gmail.com",
//     location : "Bajrang colony ashta "
// }
// // console.log(obj1)

// const obj2 = {
//     name : "kuch bhi",
//     age : 10,
//     Email : "kuschbhi@gmail.com",
//     location : "Bhopal",
// }

// Assign 

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

// Spread

const obj4 = {...obj1,...obj2}
console.log(obj4);

const course = {
    coursename : "data Science ",
    price : "999",
    corseinstructor : "vaira" ,
}

const {corseinstructor} = course
console.log(corseinstructor);

