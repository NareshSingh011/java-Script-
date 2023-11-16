// True Statement 
const userloggedIn = true 

if (2==2){
    console.log("Barabar hai !");
}

const temp  = 40
if(temp>50){
    console.log("40 Chota hai !");
}else{
    console.log("bara hai!");
}

let score = 200
if(score>100){
    let power = "Naresh Singh"
    console.log(`my name is ${power}`)
}


// nested condition 

let balance = 500

if(balance>600){
    console.log("chota hai");
}else if(300>700){
    console.log("bada hai");
}else{
    console.log("Dono nhi h");
}


let user = true
let debitcard = true 
let loggedInfromGoogle = false
let loggedInfromEmail = true

if (user&&debitcard){
    console.log("your are allow to take loan ")
}

if (loggedInfromGoogle || loggedInfromEmail){
    console.log("okay done")
}

// Switch 

// let month = 3

// switch (month) {
//     case 1:
//         console.log("January")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("April")
//         break;

//     default:
//         console.log("y mahine nhi h isme ")
//         break;
// }

let month = 5

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("y mahine nhi h isme ")
        break;
}
