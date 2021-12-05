let listOfFruits=["apple","orange","grapes","watermelon"];

//normal
// let narr=[];
// for(let i=0;i<listOfFruits.length;i++){
//     if(listOfFruits[i].length>7){
//         narr.push(listOfFruits[i]);
//     }
// }

// console.log(narr);


//filter

let narr=listOfFruits.filter((el,idx)=>{
     return el.length>7
})

console.log(narr);