let invitedguets=["divy","goel"]

let newguest="tushar";

function addGuest(guest){
    invitedguets.push(guest);
    return invitedguets
}

console.log(addGuest(newguest)); 


function largestnumber(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}

function vote(age){
    if(age>=18){
        return "Eligible"
    }else{
        "Not elgible"
    }
}

function grade(marks){
    if(marks>=90){
        return "A"
    }else if(marks>=80 && marks<90){
        return "B"
    }else if(marks>=70 && marks<80){
        return "C"

    }else if(marks>=60 && marks<70){
        return "D"
    }else{
        return "F"
    }
}

function leap(year) {
    if(year%4 ===0 && year%100!==0 || year%400===0){
        return "Leap Year";
    }else{
        return "Not a Leap Year";
    }
}

let signal="red";
switch(signal){
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("Slow Down")
        break;
    case "green":
        console.log("Go")
        break;
     case "blue":
        console.log("Invalid Signal")
        break;
      default:
        console.log("Unknown Signal")
        break;     
}
    

let operator="+";
function calculator(num1,num2){
    switch(operator){
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
         case "/":
            if(num2!==0){
                return num1/num2;
            }else{
                return "Division by zero error";
            }


    }
}

//loop

let gifts=["Toy","Book","Game","Puzzle"];
let friends=["Alice","Bob","Charlie","David"];
for(let i=0;i<gifts.length;i++){
    console.log(`${friends[i]} :  "ke" ${gifts[i]}`)
}

let basket=10;
let cnt;
for(let i=1;i<=basket;i++){
    cnt ++;
}
console.log(`Total items in the basket: ${cnt}`);

let water=[1,2,3,];

function total(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];

    }
    return sum;
}
console.log( total(water));

let maxsteps=10000;

function steps(n){
    let totalsteps=0;
    for(let i=0;i<n;i++){
        totalsteps+=i;
    }
    return total

}

let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

function workingDays(days){
    let cnt=0;
    for(let i=0;i<days.length;i++){
        if(days[i]!=="Saturday" && days[i]!=="Sunday"){
            cnt++;
        }
    }
    return cnt;
}


let ittemsprice=[100,200,300,400,500];
function totalPrice(prices){
    let total=0
    for(let i=0;i<prices.length;i++){
        total += prices[i];
    }
    return total;

}

console.log("****");
console.log("***");
console.log("**");
console.log("*");


// Array

const human= {
    name:"divy",
    age:19,
    gender:"male"   

}
const obj=JSON.stringify(human);
const decode= JSON.parse(obj);
console.log(decode)
console.log(human.name)

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());

