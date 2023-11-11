// Arrow Function 

const arrow =  (num1,num2)=>{
    return(num1,num2)
}

console.log(3,2)

// This Fuction 

let obj =  {
    name : "Naresh Singh ",
    price : 9999,
    Add : "Bajrang Colony Ashta ",

    welcome : function (user){
        console.log(`heloo ! this is  my product ${this.name} and this is the price of my product ${this.price}`);
    }
 
}

obj.welcome()
