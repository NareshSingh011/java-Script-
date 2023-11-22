// Filter 

const myArray = [0,1,2,3,4,5,6,7,8,9,10]

const newArray = myArray.filter( (num)=> (num>4) )
console.log(newArray);

// Agr curely bracket mai call karoge toh return krna padega 

const newArray = myArray.filter( (num)=> {return num>4} )
console.log(newArray);
 
const newNums = [0,1,2,3,4,5,6,7,8,9,10]
newNums.forEach((nums)=>{
    if (nums>5) {
    newNums.push(nums)
}
})

let person = [
    {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"},
    {firstName:"naresh", lastName:"singh", age:20, eyeColor:"blue"},
    {firstName:"fataka ", lastName:"singh", age:20, eyeColor:"blue"},
    {firstName:"ashish", lastName:"gautam", age:21, eyeColor:"blue"},
    {firstName:"shreya", lastName:"singh", age:19, eyeColor:"blue"},
]
const newobj = person.filter((detail)=>detail.lastName === "singh")
console.log(newobj)


const newobj1  = person.filter((detail)=>{return detail.age>20})
console.log(newobj1)

// Map 

const newNums = [0,1,2,3,4,5,6,7,8,9,10]
const newnum = newNums.map((nums)=> nums+10)
console.log(newnum)
const newnum = newNums.map((nums)=> nums*10).map((nums)=>nums+1).filter((nums)=> nums>=51)
console.log(newnum);

// reduce 
 const myNums = [1,2,3]
 const myTotal = myNums.reduce(function (acc,currval){
    console.log(`acc :- ${acc} , currval :- ${currval}`);
    return acc+currval
 },0)
 console.log(myTotal)
//Naresh singh 
