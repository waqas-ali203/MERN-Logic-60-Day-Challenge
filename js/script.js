//      DAY 1:   JavaScript Basics (Variables, Data Types, Operators)


// Write a JavaScript program that takes the user’s name and age as input, and then uses a template literal to display a personalized introduction message.

// var full_name = "Waqas Ali";
// var age = 23;

// console.log(`My name is ${full_name} and My age is ${age}`);



// Create a JavaScript program that stores 5 numbers in an array and prints the maximum number from that array


// let max_number = [23,34,78,56];
// console.log(Math.max(...max_number));  using spread operator bcz  max function will convert array num into string so string is not number ...so spread operator will give us bold value means number as original


// Write a JavaScript program that creates an object containing your name, skills, and country. Then, print the object on the screen.

// let person = {
//   name: "Waqas",
//   skills: ["HTML", "CSS", "JavaScript", "React"],
//   country: "Pakistan"
// };

// console.log(person);


// Create a variable using const and assign it a fixed value. Then, try to update that value and observe the error that occurs.

// const city = "Lahore";
// city = "Karachi"; 
// console.log(city);     // we cannot change the reference of a value but in primitive data type we can change the internal values



//       Day 2: Control Flow (if/else, switch, loops)


// Write a JavaScript program that takes a number as input and checks whether the number is positive, negative, or zero.

// var x = -213;
// if (x > 0 ){
//   console.log("Your number is positive");
// }
// else if(x<0){
//   console.log("Your number is negative");
// }
// else
// console.log("Your number is zero");


// Write a JavaScript program that takes a student’s marks as input and prints the grade

// var marks = 79;

// if(marks >= 90){
//   console.log("Your grade is A+")
// }
// else if (marks >= 70){
//   console.log("Your grade is B")
// }
// else if(marks >= 33){
//   console.log("Your grade is D")
// }
// else
//   console.log("Your grade is F")



// Write a JavaScript program that uses a for loop to calculate the sum of numbers from 1 to 10.

// let sum=0;

// for(let i=1; i<=10; i++){
//  sum = sum + i;
//  console.log(i);
// }
//  console.log("Sum of all numbers = ",sum);



// Write a JavaScript program that prints all the even numbers from 1 to 20 using a loop.

// for(var i=1; i<=20; i++ ){
//     if ( i % 2 == 0){
//         console.log(i)
//     }
// }


// Write a JavaScript program that prints the multiplication table of a given number (for example, 5) using a loop.

// var table = 5;
// for(let i=1; i<=10; i++){
// console.log(`${table} * ${i} = `, table*i)
// }




//       DAY 3: Functions in JavaScript


// Write a JavaScript function that takes two numbers as input and returns their average.

// function average(a,b){
//     return (a+b) / 2;
// }
// let totalAverage = average(20,10);
// console.log(totalAverage);


// Write a JavaScript function that takes a user’s name and age as input

// function username(name,age){

//     console.log(`My name is ${name} and age is ${age}`)
// }
// username('waqas' , '23');


// Write a JavaScript function that takes a number as input and checks whether it is even or odd.

// function checkNumber(number){
//     if(number % 2 == 0){
//         console.log("Your number is even")
//     }
//     else
//         console.log("Your number is Odd")
// }
// checkNumber(56);


// Write a JavaScript function that takes a number N as a parameter and calculates the sum of all numbers

// function sum(num , total){
//     for(let i=1; i<=10; i++){
//         let totalNumber = i + total;
//         console.log(totalNumber);
//     }
// }
// sum(2,3)


// Write a JavaScript arrow function that takes a number as input and returns its square.

// var squareNumber = (n) => n*n ;
// console.log(squareNumber(4));



//    DAY 4: Arrays + Functions (Advanced Level)


// Write a function that takes an array of numbers and returns the sum of all numbers.

// function sumArray(arr){
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum+= arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([10,12,23]))


// Write a function that takes an array and returns a new array containing only odd numbers.

// function oddNumber(arr){
//     return arr.filter(num => num % 2 != 0)
// }
// console.log(oddNumber([2,23,13,65]))


// Write a function that takes an array of strings and returns the longest string.

// function longestArray(arr){
//     let longest = " ";
//     for(let str of arr){
//         if(str.length > longest.length){
//             longest = str ;
//         }
//     }
//     return longest;
// }
// console.log(longestArray(["Ahmad" , "Waqas" , "Ali" , "Zavian"]));


// Write a function that takes an array of numbers and returns the maximum and minimum in one object

// function numberMaxMin(arr){
//     let maxNum = arr[0];
//     let minNum = arr[0];

//     for(let num of arr){
//         if(num > maxNum) maxNum = num;
//         if(num < minNum) minNum = num;
//     }
//     return {maxNum , minNum}
// }
// console.log(numberMaxMin([12,34,56,90]))


// Write a function that removes duplicate values from an array.
