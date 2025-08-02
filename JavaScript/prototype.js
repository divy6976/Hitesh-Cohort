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

                                                                                  



    