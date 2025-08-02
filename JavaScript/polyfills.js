const arr=[1,2,3,4,5,6]

    if(!Array.prototype.myforEach){
     Array.prototype.myforEach=function(userfn){
        const originalArr=this //Current Object ki taraf point karta hai

        for(let i=0;i<originalArr.length;i++){
      userfn(originalArr[i],i);
        }
     }
    }

               
if(!Array.prototype.myMap){        //(e)=> e*3
    Array.prototype.myMap=function (userFn){
    const result=[]
    for(let i=0;i<this.length;i++){
   const value=userFn(this[i],i);
   result.push(value);
    }


    return result;
    }
}

 if(!Array.prototype.myFilter){
    Array.prototype.myFilter=function(userfn){
        const result=[]

        for(let i=0;i<this.length;i++){
       if(userfn(this[i])){
result.push(this[i]);
       }
        }
        
        

        
        return result;

    }
 }



// Erorr: .forEach function does not exist on arr variable

// Real Signature ko samjo- No return,function input, value,index
//calls my dfn for every value


arr.myforEach(function(value,index){
     console.log( ` my for each value at Index ${index} is ${value}`)
})




// Signature .map []
//Return?- New Array,Each element Iterate,userFn

const n= arr.map(function (value,index){
    return value*2
})


// const n= arr.map((e)=> e*2)
const n2=arr.myMap((e)=>e*2)
console.log(n)
console.log(arr)

console.log(n2)



//Filter 
//Signature: Return-new Array |input :userfn
//agar user ka function true return krta hai toh current value ko new array mai include kr leta hai

const n3= arr.myFilter((e)=> e%2==0 );
console.log(n3)


