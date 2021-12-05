// console.log(this);

// function fun(){
//     console.log(this);
// }

// fun();
// ----------------------------------------------------------------------
// console.log(this);

// function fun(){
//     console.log(this);
// }

// let obj={
//     name:"srinibas",
//     fn:fun
// }

// obj.fn();
// -----------------------------------------------------------------------
// console.log(this);

// function fun(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     abc();

// }

// let obj={
//     name:"srinibas",
//     fn:fun
// }

// obj.fn();

// ---------------------------------------------------------------------

// console.log(this);

// function fun(){
//     console.log(this);
//     function abc(){
//         console.log(this);
//     }
//     let v=abc.bind(this);
//     v();

// }

// let obj={
//     name:"srinibas",
//     fn:fun
// }

// obj.fn();

// --------------------------------------------------------------------
console.log(this);

function fun(){
    console.log(this);
    let abc=()=>{
        console.log(this);
    }
    abc();

}

let obj={
    name:"srinibas",
    fn:fun
}

obj.fn();

