let arr=[1,2,3];
// let narr;
// //normally
// for(let i=0;i<arr.length;i++){
//     narr.push(arr[i]*2);
// }

// console.log(narr);

//using map

let narr=arr.map((el,idx)=>{
   return el*2;
})
console.log(narr);