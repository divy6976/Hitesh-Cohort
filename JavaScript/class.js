class Person{
        
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;


    }
    getfullname(){
        return `${this.fname} ${this.lname}`;
    }

}



const p1=new Person('divy','pandey')
const p2=new Person('meenakshi','pandey')     



console.log(p1.getfullname())
console.log(p2.getfullname())

