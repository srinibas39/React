let obj = {
    name: "srinibas",
    add: {
        pin: "753008",
        state: "odisha"
    }
};

// let obj2=obj;

// obj.name="rahul";

let obj2 = { ...obj }; //shallow copy;

obj2.name = "rahul";

let obj3 = { ...obj, add: { ...obj.add } }; // deep copy;
obj3.add.state = "west bengal"

//shortcut for deep copy

let obj4 = JSON.parse(JSON.stringify(obj2));

obj4.name = "ayush"
obj4.add.pin = "753001";

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(obj4);