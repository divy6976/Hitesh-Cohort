Object.prototype.chai=function(){
    console.log('chai');
}

const obj={
    x:1,
    length:1
}
 obj.chai()

 if(!Array.prototype.fill){
    //FallBack - Polyfill -Bakup function
    Array.prototype.fill=function(){

    }
 }


// An object is an entity that holds properties and functions (methods).
const user = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

user.greet(); // Output: Hello, my name is Alice

 
                                                                                  


// Es6 Classes

// class Person(){
//     ...schema,
//     new key

// }
    
// const p1=new Person();
// const p2=new Person();  