// const tea={
//     name:"Green tea",
//     type:"Herbal",
//     caffeine:"low"

// }

// console.log(tea);
// console.log(tea.name);
// console.log(tea.type)

// tea.price=100;

//  tea.caffeine="medium";

//  delete tea["type"]; 
//  console.log(tea);

//  console.log("type" in tea)

//  for (let key in tea) {
//    console.log( key + tea[key])
//  }

//  const teas={
//     grrentea:{
//         name:"Green tea",
//         type:"Herbal",
//         caffeine:"low"
//     },
//     blacktea:{
//         name:"Black tea",
//         type:"Black",
//         caffeine:"high"
//     }

// }


// const copy=JSON.stringify(tea)
//  const teacopy=JSON.parse(copy);
// console.log(teacopy);


Object.prototype.chai= function(){
 console.log("chai aur code")
}
const tea={
    name:"Ice lemon tea",
    type:"cool",
    caffeine:"low"
}
console.log(tea.chai())

