// "use strict"

// Default Parameters
// function sum(a, b = 10) { //If we set value in parameters then it calls default parameters
//     return a + b;
// }; console.log(sum(25));

// // Value VS Reference
// const student1 = {
//     name: "Ruhi",
//     city: "Dhaka",
// };
// // const student2 = student1;  //Here student2 is sharing same memory location of student1 and it's call Reference
// const student2 = { ...student1 };  // Value
// student2.name = "Mimi";
// student2.roll = 25;
// console.log(student1);
// console.log(student2);

// // First Class Function: Below exampls will show us the characteristics of first class function.
// const firstClass = (a, b) => { //a,b are parameters of firstClass function.
//     return a + b;
// };
// // console.log(firstClass(4, 12)); //Can be stored in a variable(Characteristics of first class function).

// //Higher Order Function (HOF)
// const otherFunction = (a, b, fn) => { //Here otherFunction is a Higher Order Function (HOF) cause its taking a function as a parameter and it also returning a function.

//     return fn(a, b); //Here fn is a call back funtion and first class function cause its waiting for otherFunction to call it and its an argument of otherFunction so thats why its a first class function too.

// }; console.log(otherFunction(5, 15, firstClass)); //Can be passed as an argument to other function which is a characteristics of first class function.

// // Call Back Function
// const greet = document.querySelector(".greet");
// const callBack = () => {
//     document.body.style.backgroundColor = "pink";
// }
// greet.addEventListener("mouseover", callBack);

// Curriying Function
// function doMath(a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function (e) {
//                     return a + b + c + d + e;
//                 }
//             }
//         }
//     }
// };
// const doMath = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
// const result = doMath(15)(9)(7)(3)(8);
// console.log(result);

// Side Effect
// function foodCutter(quantity) {
//     return quantity * 4;
// };
// function addFlavour(pieces, fl) { //addFlavour call pieces function so side effect 1
//     return pieces * fl;
// };
// function foodBlender(quantity, fl) {  //foodBlender call 2 functions so side effect 2
//     const pieces = foodCutter(quantity);
//     return addFlavour(pieces, fl);
// }
// console.log(foodBlender(12, 5));

// Call()
// function greet(greeting) {
//     return `${greeting} , ${this.name}`;
// };
// const person1 = { name: "Mimi" };
// const text = greet.call(person1, "Assalamualaikum");
// console.log(text);

// //Apply
// function greet(greeting, message) {
//     return `${greeting} , ${this.name} . ${message}`;
// };
// const person2 = { name: "Lili" };
// const args = ["Assalamualaikum", "How are you ?"];
// const text = greet.apply(person2, args);
// console.log(text);

// // Bind
// function calcAge(greeting) {
//     return `${greeting} , ${this.name} . You are ${2023 - this.birthYear} year old.`;
// };
// const human1 = { name: "Mimi", birthYear: 2000 };
// const human2 = { name: "Lili", birthYear: 2010 };

// const calcHumanAge = calcAge.bind(human2);
// console.log(calcHumanAge("Assalamualaikum"));

// // IIFE : To call a function directly and for one time.
// (function () {
//     const secret = "Assalamualaikum";
//     console.log(secret);
// })();

// Closures
function outerFunction() {
    const myFavNum = 14;
    function innerFunction() {
        return myFavNum;
    };
    return innerFunction;
};
const myFunction = outerFunction();
console.log(myFunction());