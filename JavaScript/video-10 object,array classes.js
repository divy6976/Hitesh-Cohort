// let teas=["green tea", "black tea","oolong tea","white tea","herbal tea"];



// teas.push("Chamomile tea")

// const index=teas.indexOf("oolong teahitesh");
// console.log(index)

// if(index>-1){
//     teas.splice(index,1)
// }

// const filteredTeas = teas.filter(tea => tea!=="herbal tea" );


// teas.sort();

// for(let i=0;i<teas.length;i++){
//     console.log(`type of tea at index ${i}  ${typeof teas[i]}`)
// }

// let caffinatedteas=0;
// for(let i=0;i<teas.length;i++){
//     if(teas[i]!=="herbal tea"){
//         caffinatedteas++;
//     }
// }


// const upeercaseteas=[]
// for(let i=0;i<teas.length;i++){
//     upeercaseteas.push(teas[i].toUpperCase());
// }


// let longestteaname="";
// for(let i=0;i<teas.length;i++){
//     if(teas[i].length>longestteaname.length){
        
//         longestteaname=teas[i];
//     }
// }
// console.log(longestteaname)

// for(let i=0;i<teas.legnth;i++){
//     teas[i]=teas[i].reverse();
// }


// const  reversedteas=[];
// for(let i=teas.length-1;i>=0;i--){
//     reversedteas.push(teas[i])
// }
// console.log(reversedteas)


   
 const person={
    x: 10,
    firstname:"divy",
   isarray:[1, 2, 3, 4, 5],
   fullname: function(){
    return "divy prakash pandey"
   },
  address:{
    city: "varanasi",
    state: "up",
    country: "india"
  }

 }
 console.log(person.address.city);


 const remote={
   color:'black'
 }
  

 let p1={
    fname: "divy",
    lname: "pandey",
    address:{
h:1,
s:1
    }
 }
  const p1kaString=JSON.stringify(p1);



 let p2=JSON.parse(p1kaString)
p2.address.h=2;
 p2.fname="amar"
   console.log(p2)
   console.log(p1)


   //objects ke bare me pdna hai
   //human ko serialise krke bejana hai fr desrailize 
   // array ke methods pdne hai
     

          