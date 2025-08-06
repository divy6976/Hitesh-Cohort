Function.prototype.describe=function(){
    console.log(`function name is ${this.name}`);
}


function greet(name){    // yaha name hai parameter
    return `Hello ${name}`;
}

greet.describe('hitesh') ///isme function ka naam ata hai  kyu usme this.name krrha tha mtlb jis function ne bulaya uska naam
  //jo hitesh pass horha wo hai argument

//function declartion
  function add(a,b){
    return a+b;
  }

//function expression
  const subtract=function(a,b){
    return a-b
  }
  //function multiplication
  const multiply=(a,b)=> a*b


function createCounter(){
  let count=0;
  return function(){
    count ++;
    return count;
  }

}

  



const counter=createCounter()
console.log(counter())

 // Ye IIFE (Immediately Invoked Function Expression) hai
 // IIFE ek aisa function hai jo turant execute ho jata hai jab define karte hain

//  (function(){
//   console.log("divy")
//  })()

 
