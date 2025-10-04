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