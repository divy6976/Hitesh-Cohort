const obj1={
    fname:"divy",
    lname:"pandey",
    getFullname:function(){
        return  `${this.fname} ${this.lname}`
    }
}

const obj2={
 fname:"meenakshi",
    lname:"pandey",
   
}

// DRY- DO not repeat yourself
// console.log(obj1)

obj2.__proto__=obj1;
console.log(obj2.getFullname());
console.log()
