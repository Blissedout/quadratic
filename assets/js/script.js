
let myName = 'John';
let surname = 'Smithsonian';
console.log("The lenght of the string is: " , surname.length);

console.log(typeof surname);


let student1 = "Anna Ojo";
let student2 = "Blessing Jonathan";
let student3 = "Stella Anthony";
let student5 = "Jane Smith"
let greeting = "Hello, ";
let teacher = greeting + student1 + ", " + student2 + ", " + student3 + ", " + student5;

// console.log("String length ", student1.length);
// console.log("String length ", student2.length);
// console.log("String length ", student3.length);
// console.log("String length ", student5.length);
// console.log(teacher)
// console.log(typeof greeting);

// let sentence = "This is a web dev training course";

// let result = sentence.lastIndexOf('j');
// if(result) {
//   console.log('found!');
// }else{
//   console.log('Not Found');
// }


// console.log(teacher.slice(6, 10));
// console.log(teacher.split(""));
// console.log(teacher.toLowerCase());
// console.log(teacher.toUpperCase());

// let str1 = 'John';
// let myStr = `${str1} is my name`;
// console.log(myStr);

// let Name = `surname`
// let form = `<div>
//      <label for="">${Name}</label>
//    <input type="text">
//    </div>

//     <div class="mt-3">
//      <label for="">Name</label>
//    <input type="email">
//    </div>

//     <div class="mt-3">
//      <label for="">Phone</label>
//    <input type="tel">
//    </div>

//     <div class="mt-3">
//      <label for="">Hobby</label>
//    <input type="text">
//    </div> 
// `
// const demo = document.getElementById('demo');
// demo.innerHTML =form;

// const myArray = [5, "run", "jump", "stand", "walk", "sit"];

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

// console.log(myArray.length);

// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(daysOfWeek[1]);
// daysOfWeek.push("Blesing's Day");
// console.log(daysOfWeek);
// daysOfWeek.unshift("Ngozi's Pizza Day");
// console.log(daysOfWeek);
// daysOfWeek.pop();
// console.log(daysOfWeek);
// daysOfWeek.pop();
// console.log(daysOfWeek);
// daysOfWeek.shift();
// console.log(daysOfWeek)

// function myFunction(){
//  console.log('Hello User');
// }

//   myFunction();
let lastName = 'Jane';
function displayName(x){
   return x;
}

console.log(displayName(lastName));

function addAll(a, b){
  return a + b;
}

console.log(addAll(10, 2));
let x = addAll(2, 22);
console.log(addAll(22, 30));

//area of a circle
const PI = 3.14159;
//let radius = 5

function circle(radius){
  let area = 2 * PI * radius;
  return area;
}

let k = circle(4);
console.log(k);

let area = document.getElementById('demo');
area.innerHTML = k + 'cm<sup>2</sup>';