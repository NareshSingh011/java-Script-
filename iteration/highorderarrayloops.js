//  for of loop 

const arr = [1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}

const detail = {
    name : "naresh Singh ",
    add : "apna dal le",
    Email : "pata nhi@com",
    number : 8379479737,
}

// y abhi iterable nhi hai 

for (const [key,val] of detail) {
    console.log(key,":-",val)
} 

for (const val of detail.name) {
   console.log(`sari value itrerate ${val}`);
}

for (const [key,val] of Object.entries(detail)) {
    console.log(key,val);
}

// Maps 
  
const map = new Map()
map.set("MP","Madhya pradesh")
map.set("UP","Uttar Pradesh")
map.set("Uk","Uttrakhand")
map.set("MH","Maharashtra")
console.log(map)

for (const [key,value] of map) {
    console.log(key ,':-',value)
}

// for In loop 

const detail = {
    name : "naresh Singh ",
    add : "apna dal le",
    Email : "pata nhi@com",
    number : 8379479737,
}
for (const key in detail) {
    console.log(`${key}  :- ${detail[key]}`)
}


const myArray = [1,2,3,4,5]
for (const key in myArray) {
    console.log(key)
}

// map  for in kaam ni krta hai 

for (const key in map) {
   console.log(map);
}

for Each in loops

const myArray = ["java","python","cpp","js"]
// 1. Tarika 
myArray.forEach(element => {
    console.log(element);
});
// 2. Tarika 
function printMe (element){
    console.log(element)
}
myArray.forEach(printMe)

// 3. Tarika
myArray.forEach(function (params,index,arr) {
    console.log(params,index,arr);
})

// foreach in object

const detail = [{
    name : "naresh Singh ",
    add : "apna dal le",
    Email : "pata nhi@com",
    number : 8379479737,
 },
{
    name : "fataka Singh ",
    add : "mera hi h ",
    Email : "fataka singh @com",
    number : 8358514847,
 },
{
    name : "ghanti Singh ",
    add : "jamna pur",
    Email : "ghanti@com",
    number : 848184518747,
 }]
detail.forEach(function(element){
    console.log(element.name)
})

