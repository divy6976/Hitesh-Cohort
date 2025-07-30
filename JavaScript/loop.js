// let teas=["green tea", "black tea", "herbal tea", "chai", "oolong tea"];


// //vairable leke aoo
// // limit btao
// //incre/decre


// // for(let i=0;i<teas.length +5;i++){
// //   console.log(`tea at index ${i} : ${teas[i]}`)
// // }

// let array=[1,4,2,3,5,6]

// function sum(number){
//     let sum=0;

// for(let i=0;i<number.length;i++){
//     sum +=number[i];

// }

//     return sum;
// }
// console.log(sum([3,3,2,6,4]));




//dtatypes ke bare me pdna hai condtional aur loops
//assgintment creative 10 array methods story format



//pratice

function numbercheck(number){
    if(number %2===0){
        console.log("even")
    }else{
        console.log('odd')
    }
}
numbercheck(10);

for(let i=0;i<10;i++){
    console.log(i)
}

// three number  biggest


let a=10;
let b=20;
let c=30;
if(a>b && a>c){
    console.log("A is the biggest number");
}else if(b>a && b>c){
    console.log("B is the biggest number");
}else{
    console.log("C is the biggest number");
}

//table of any

let number=7;
for(let i=1;i<=10;i++){
    console.log(number *i)
}


for(let i=0;i<=100;i++){
    if(i%3 ==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    
    }else if(i%3==0 && i%5==0){
        console.log("FizzBuzz");

    }
}


function add(num){
    let result=[];
    for(let nums of num){
        if(nums%2==0){
            result.push(nums)
        }

    }
    return result;

}

console.log(add([1,2,3,4,5,6,7,8,9,10]));


function findMax(arr) {
let max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
return max;
}
console.log(findMax([1,2,3,4,5,6,7,8,9,10]));