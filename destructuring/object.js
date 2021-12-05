// let obj={
//     name:"srinibas",
//     country:"india",
//     state:"odisha"
// }

// //normally

// // let name=obj.name;
// // let country=obj.country;
// // let state=obj.state;

// // console.log(name,country,state);

// let {name,_,state,pin="753008"}=obj;

// console.log(name,state,pin);


let obj={
    name:"srinibas",

    add:{
        state:"odisha",
        country:"India",
        a:{
            abc:"123"
        }
        
    }
}

let {add:{a:{abc}}}=obj;

console.log(abc);

let {add:{state}}=obj;

console.log(state);

