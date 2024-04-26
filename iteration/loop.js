
// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element<=5) {
        console.log("Y sab chote hai ")
    }
    console.log(element)
    
}

// loop k andr loop 

for (let i = 0; i<= 10; i++) {
    console.log(`y mera bhar ka loop hai${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`y mere andr ka loop hai ${j}aur y bhi ${j} `);
        console.log(i + '*' + j + '=' + i*j)
    }
    
}

// abb ek array banayenge 

let myArray = [ 'Naresh','satish','ankush','aryan']
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}

for (let i = 0; i < 30; i++) {
    if (i==15) {
        console.log(`bss yhi prr rukna hai `)
        break
        // continue
    }
    const element = i;
    console.log(`value of index ${element}`)
}

// while loop 

index = 10 
while (index<=20){
    console.log(`jaa re fattu${index}`)
    // index++
    index = index + 2
}
let myArray = [ 'Naresh','satish','ankush','aryan']
index = 1
while(index <=2){
    console.log("bss chal jaa")
   index++
}


//  length fo the array 

let myArray =   ["Naresh","monty","sourabh","fataka "]
myArray.length;
console.log(myArray.length)
for (let index = 0; index < 1; index++) {
    const element = myArray[index];
    console.log(myArray)
}

// while loop 

index = 10
while (index==10) {
    if (index<9) {
        console.log("index bada hai 20 se ")
    }else{
        console.log("value choti hai index se ")
    }
    index++
}

// do while loop 

let score = 1
do {
    console.log(`score is ${score}`)
    score++
} while (score<=10);

// naresh Singh
