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

// function removeDuplicate(arr){
//     let unique = [];
//     for(let val of arr){
//         if(!unique.includes(val)){
//             unique.push(val)
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicate([1,2,2,3,4,5,5,6,6]));

// Write a function that takes an array and a target number, and checks if the number exists in the array (return true/false)

// function exist( arr , target){
//     return arr.includes(target);
// }
// console.log(exist([3,4,7,10],7));

//  Write a function that counts how many even numbers are present in an array.

// function checkEvenNum(arr){
//     let evenNum = [];
//     for(let val of arr){
//         if(val % 2 == 0){
//             evenNum.push(val);
//         }
//     }
//     return evenNum.length;
// }
// console.log(checkEvenNum([3,4,8,12,19,34]));

//  Write a function that counts how many even numbers are present in an array.

// function checkEvenNum(arr){
//     let count = 0;
//     for(let val of arr){
//         if(val % 2 == 0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(checkEvenNum([3,4,8,12,19,34]));

// Write a function that reverses an array without using reverse() method.

// function reverseArray(arr){
//     let reverse = [];
//     for(let i=arr.length-1; i>=0; i--){
//         reverse.push(arr[i]);
//     }
//     return reverse
// }
// console.log(reverseArray([2,3,4,5]));

// Write a function that takes an array of marks and returns "Pass" if all marks ≥ 33, otherwise "Fail".

// function marks(arr){
//     for(let val of arr){
//         if(val < 33){
//            return "Fail";
//         }
//     }
//     return "Pass";
// }
// console.log(marks([23,33,45,11,34]));

// Write a function that multiplies all numbers in an array using reduce().

// function multypleAll(arr){
//     return arr.reduce((a , b) => a*b , 1);
// }
// console.log(multypleAll([2,3,12]));

//    DAY 5: Objects & Functions

// Create an object named book with properties: title, author, pages.

// let book = {
//     title : "The great Learner",
//     author : "Waqas ali",
//     pages : "34"
// }
// console.log(book)
// console.log(book.title)
// console.log(book["pages"])

// Add a method to book that prints a short summary.

// let book = {
//     title : "The great Learner",
//     author : "Waqas ali",
//     pages : "34",
//     summary : function (){
//         console.log(`This book ${this.title} is written by ${this.author} with ${this.pages} pages`)
//     }
// }
// book.summary();

// Write a function square(num) that returns the square of a number.

// function square(num){
//     return num*num;
// }
// console.log(square(3));

// Write a function that takes two numbers and returns the greater one.

// function maxNum(a,b){
//     if(a>b){
//         console.log(`${a} is greater`);
//     }
//     else
//         console.log(`${b} is greater`);

//     return maxNum;

// }
// maxNum(34,5);

// Create an object employee with salary and a method to increase it by 10%.

// let employe = {
//    fullname : "waqas",
//    job : "Software Engineer",
//    oldSalary : 400000,
//    updatesalary : function() {
//     return this.oldSalary + (this.oldSalary * 0.10);
//    }
// }
// console.log(employe.updatesalary());

// Write a function that counts total keys in an object.

// let employe = {
//    fullname : "waqas",
//    job : "Software Engineer",
//    oldSalary : 400000,
//    updatesalary : function() {
//     return this.oldSalary + (this.oldSalary * 0.10);
//    }
// }

// function numOfKeys(){
//     return Object.keys(employe).length;
// }

// console.log(numOfKeys());

// Create an object product and add a method to calculate discount price.

// let product = {
//     productName : "Cooking oil",
//     productQuality : "High",
//     productPrice : 456,
//     productDiscount : function (){
//         if (this.productPrice > 400){
//             console.log("Thsi is discount Product")
//             return this.productPrice - (this.productPrice * 0.05);
//         }
//         else {
//             console.log("Thsi is not  discount Product")
//             return this.productPrice ;
//         }
//     }
// }

// console.log(product.productDiscount());

// Write a function that checks if a given property exists in an object or not.

// let employe = {
//    fullname : "waqas",
//    job : "Software Engineer",
//    oldSalary : 400000,
//    updatesalary : function() {
//     return this.oldSalary + (this.oldSalary * 0.10);
//    }
// }

// console.log("job" in employe);    1st method  by using in operator
// console.log(employe.hasOwnProperty("job"));    2nd method by using hasownProperty method

// DAY 6: Arrays + Objects + Functions (Advanced Logic Build)

// Ceate an array of 5 employees (each with name, salary, department).

// let employeData = [
//     {name : "Waqas" , salary : 500000 , department : "Software engineer"} ,
//     {name : "Hannan" , salary : 700000 , department : "Data science"} ,
//     {name : "Ammar" , salary : 600000 , department : "Artificial Intelligence"}
// ]

// Print only employee names using forEach().

// let employeData = [
//     {name : "Waqas" , salary : 500000 , department : "Software engineer"} ,
//     {name : "Hannan" , salary : 700000 , department : "Data science"} ,
//     {name : "Ammar" , salary : 600000 , department : "Artificial Intelligence"}
// ]

// employeData.forEach(emp => {
//     console.log(emp.name);
// });

// Filter all employees with salary > 500000.

// let employeData = [
//   { name: "Waqas", salary: 500000, department: "Software engineer" },
//   { name: "Hannan", salary: 700000, department: "Data science" },
//   { name: "Ammar", salary: 600000, department: "Artificial Intelligence" },
// ];

// let highestSalary = employeData.filter((emp) => emp.salary > 500000);
// console.log(highestSalary)

// Find the employee who works in “IT” department.

// let employeData = [
//   { name: "Waqas", salary: 500000, department: "IT" },
//   { name: "Hannan", salary: 700000, department: "Data science" },
//   { name: "Ammar", salary: 600000, department: "Artificial Intelligence" },
// ];

// let worker_IT = employeData.filter( emp => emp.department === "IT");
// console.log(worker_IT)

// Create a function that returns total salary of all employees.

// let employeData = [
//   { name: "Waqas", salary: 500000, department: "IT" },
//   { name: "Hannan", salary: 700000, department: "Data science" },
//   { name: "Ammar", salary: 600000, department: "Artificial Intelligence" },
// ];

// function totalEmployeSalary(employess){
//     return employess.reduce((sum , emp) => sum + emp.salary , 0)
// }
// console.log(totalEmployeSalary(employeData))

// Use map() to make a new array of all employee names in uppercase.

// let employeData = [
//   { name: "Waqas", salary: 500000, department: "IT" },
//   { name: "Hannan", salary: 700000, department: "Data science" },
//   { name: "Ammar", salary: 600000, department: "Artificial Intelligence" },
// ];

// let upper_Case = employeData.map(emp => emp.name.toUpperCase());
// console.log(upper_Case)

// Sort employees by salary (highest → lowest).

// let employeData = [
//   { name: "Waqas", salary: 500000, department: "IT" },
//   { name: "Hannan", salary: 700000, department: "Data science" },
//   { name: "Ammar", salary: 600000, department: "Artificial Intelligence" },
// ];

// let salaryRange = employeData.sort((a , b) => b.salary - a.salary);
// console.log(salaryRange)

// Add 10% bonus to each employee salary (using map()).

// let employeData = [
//   { name: "Waqas", salary: 500000, department: "IT" },
//   { name: "Hannan", salary: 700000, department: "Data science" },
//   { name: "Ammar", salary: 600000, department: "Artificial Intelligence" },
// ];

// let addBonus = employeData.map(emp => emp.salary + (emp.salary * 0.10))
// console.log(addBonus)

// Day 7: Arrays + Map + Reduce + Deep Logic Building (Mini Real-World Practice)

// Create an array of numbers and return a new array with each number squared using map().

// let numbers = [ 3 , 4, 5 , 11]
// let square_Number = numbers.map(num => num*num);
// console.log(square_Number)

// Create an array of student marks and filter those who scored more than 80.

// let marks = [34 , 43, 66, 90 , 88 , 56, 82]
// let topper = marks.filter(mark => mark >= 80);
// console.log(topper)

// Create an array of employees (name, salary) and use reduce() to find total salary.

// Use find() to get the first student who scored exactly 100 marks.

// Use forEach() to print all car names from an array.

// Create an array of products and increase each price by 15% using map().

// Create an array of expenses and use reduce() to calculate total spending.

// Filter all even numbers from [12, 45, 33, 90, 24, 11].

// Find first number greater than 50 from the above array.                        All done before

// DAY 8 — “Advanced JavaScript Foundations”  (Nested Objects, Nested Arrays, Destructuring, and Spread Operator)

// Create an object student with nested object address and print the city.

// let student = {
//     Name : "zain",
//     class : "IT",
//     city : {
//         permanent_City : "Faisalabad",
//         Temprary_City : "Lahore"
//     }
// }

// console.log(student.city.permanent_City)

// Make an array of 3 users (name, email, city) and print the email of the second user.

// let users = [{name : "zain", email : "zain@gmail.com" , city : "fasialabad"},{name : "waqas", email : "waqas@gmail.com" , city : "Lahore"},{name : "Waris", email : "waris@gmail.com" , city : "Multan"}]
// let {email} = users;
// console.log(users[1].email)

// Use array destructuring to extract first and last fruit from an array.

// let fruits = ["Banana" , "Apple" , "Orange" , "Guava"]
// let [first , , , last] = fruits;
// console.log(first , last)

// Copy one array into another using spread operator.

// let fruits = ["apple" , "banana"];
// let vegetabels = ["potato" , "pumpkin"]

// let combined = [[...fruits , ...vegetabels]]
// console.log(combined)

// Use rest operator in a function to calculate product of all numbers passed.

// function productAll(...num){
//    return num.reduce((first , last) => first * last , 1)

// }
// console.log(productAll(2,3,4,32))

// DAY 9 – Higher-Order Functions & Callbacks

// Write a function printMessage(callback) that prints "Starting...", waits 1 second, then runs the callback "Finished!".

// function printMessage(callback){
//     console.log("Starting")
//     setTimeout(()=>{
//         // console.log("processing");
//         callback();
//     },1000)
// }
// printMessage(() => console.log("Finished"));

// Make a calculator function that accepts two numbers and a callback (add, subtract, multiply, divide).

// function calculator(num1 , num2 , operation){
//     return operation(num1 , num2)
// }
// function add(num1 , num2){
//     return num1 + num2 ;
// }
// function subtract(num1 , num2){
//     return num1 - num2 ;
// }
// function multiply(num1 , num2){
//     return num1 * num2 ;
// }
// function dividion(num1 , num2){
//     return num1 / num2 ;
// }
// console.log(calculator(2 , 4 , add))    // Skip this topic because all questions are same like callabck this question

// DAY 10 – Higher-Order Functions in Action: map(), filter(), and reduce()

// Use map() to create a new array that doubles all numbers in [3, 6, 9, 12].

// let arr = [3, 6, 9, 12];
// let double = arr.map(num => num* 2);
// console.log(double)

// Use filter() to get all even numbers from [1,2,3,4,5,6,7,8].

// let numbers = [1,2,3,4,5,6,7,8];
// let even_Numbers = numbers.filter(num => num % 2 == 0);
// console.log(even_Numbers)

// Use reduce() to find the product of all numbers in [1,2,3,4,5].

// let num = [1,2,3,4,5];
// let product = num.reduce((first_Num , second_Num) => first_Num * second_Num , 1);
// console.log(product)

// Given [{name:"Ali",age:20},{name:"Ammar",age:25}], use map() to extract names only.

// let students = [{name:"Ali",age:20},{name:"Ammar",age:25}];
// let std_Names = students.map(fullname => fullname.name)
// console.log(std_Names)

// From [10,15,20,25,30], filter numbers > 20 and double them using chaining.

// let arr = [10, 15, 20, 25, 30];
// let result = arr.filter((num) => num > 20).map((num) => num + num);
// console.log(result);

// Calculate total marks of all students using reduce().

// let arr = [{name : "waqas" , marks : 40}, {name : "Ammar" , marks : 90}, {name : "asad" , marks : 70}];
// let total_Marks = arr.reduce((num , mar) => num + mar.marks,0);
// console.log(total_Marks)

// Combine map() + filter() + reduce() to find the sum of all even numbers after doubling them.

// let arr = [34, 23, 56, 12, 7, 19, 23, 44, 38];
// let result = arr
//   .filter((num) => num % 2 == 0)
//   .map((num) => num * 2)
//   .reduce((sum, num) => sum + num, 0);
// console.log(result);

// Given prices=[200,400,600], use map() to apply 10% discount and print new prices.

// let prices = [200,400,600];
// let discount = prices.map(num => num - (num * 0.10));
// console.log(discount)

// DAY 11 — JavaScript: Asynchronous Programming (Callbacks, Promises, async/await)

// Use setTimeout to print "Welcome" after 3 seconds.

// setTimeout(() =>{
//     console.log("Welcome");
// },3000);

// Write a function that prints numbers 1 to 5, each after 1 second.

// function printNum(){
//     for(let i=1 ; i<=5 ; i++){
//          setTimeout(() => {
//         console.log(i)
//     },i*1000)  // i*1000 because every number will display after iteration with delay ....if we write just time then only whole output will be show afetr 1 sec delay
//     }

// }
// printNum();

// Write an async/await version of file downloading.

// function fileDowloand(){
//     return new Promise(resolve =>{
//         setTimeout(() => {
//             resolve("Dowloand File successfully")
//         },2000)
//     })
// }

// async function getFile() {
//     console.log("Selecting File for Dowloand...");
//     let message = await fileDowloand();
//     console.log(message);
// }
// getFile();

// Create two promises task1 and task2 that complete in different times — use Promise.all() to wait for both.

// function Task1(){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve("Task 1 complete");
//         },2000)
//     })
// }
// function Task2(){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve("Task 2 complete");
//         },4000)
//     })
// }
// Promise.all([Task1() , Task2()])     // promise.all   means it will give all promise data if one fail then other all fail ...if all will get data then output will show
// .then(result => console.log(result))
// .catch(error => console.log(error));

// Use Promise.race() to show whichever finishes first.

// function fetchData(){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve("Data fetch successfuly");
//         },4000)
//     })
// }
// function timeOut(){
//     return new Promise(reject =>{
//         setTimeout(() =>{
//             reject("Server time Reachout!");
//         },2000)
//     })
// }
// Promise.race([fetchData() , timeOut()])    // Promise.race() returns the result of the fastest promise.In real use, it's helpful when fetching data — if the server is slow, we add a timeout promise so it shows “Request Timeout” if data doesn’t arrive in time.
// .then(result => console.log(result))
// .catch(error => console.log(error));

// Simulate an API call that fails 50% of the time (random boolean). Handle it with try/catch.

// function fakeApiCall(){
//     return new Promise((resolve , reject) => {
//         let success = Math.random() > 0.5 ;
//         console.log(success)
//         setTimeout(() =>{
//             if(success){
//                 resolve("Data Fetch Successfuly");
//             }
//             else{
//                 reject("Error Fetching Data");
//             }
//         },2000)
//     })
// }

// async function getData() {
//     try {
//         let result = await fakeApiCall();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData();


// Chain 3 async operations (user → orders → order details) using async/await.

// function getUser() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ id: 1 , name: "waqas" }),1000)
//   );
// }
// function getOrder(userId) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(["order1" , "order2" , "order3"]),1000)
//   );
// }
// function getOrderDetail(order) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ order , details : "Delivered on time"}),1000)
//   );
// }

// async function showUserOrderDetail() {
//     console.log("Order Detail Fetching.....");
//     const user = await getUser();
    
//     console.log("Fetching Order for" , user.name);
//     const order = await getOrder(user.id);

//     console.log("Fetching Order Detail" , order[0])
//     const orderDetail = await getOrderDetail(order[0]);
//     console.log("Final Result" , orderDetail)
// }
// showUserOrderDetail();



// DAY 12 — JavaScript Error Handling + Debugging (try...catch, throw, finally, console tools)

// (try , catch , finally , throw )  it is done in up code


// Debugging means finding and fixing errors in your code.

// Tools:

// console.log() — to trace variable values

// Browser Developer Tools → Sources → “Add breakpoint”

// Use debugger; keyword to pause execution manually



// Write code that tries to divide two numbers and catches divide-by-zero error.

// function divide(a,b){
//     if (b === 0){
//         throw new Error("Divide cannot on zero");
//     }
//     return a / b;
// }
// try {
//     let result = divide(10 ,0)
//     console.log("This is result" , result)
// } catch (error) {
//     console.log("erro" , error.message)
// }


// Create a function parseJSON(str) that safely parses JSON and catches syntax errors.

// function parseJSON(str){
//     try {
//         let data = JSON.parse(str);
//         console.log("Parse Successfuly" , data)
//     } catch (error) {
//         console.log("Invalid jSON" , error.message)
//     }
// }
// parseJSON('{"name":"waqas" , "age" : 23}')



// Day 13 — JavaScript: Async/Await + Error Handling

// Create a promise that resolves after 3 seconds with "Download complete". Use async/await to wait and print it.

// function dowloandFile(){
//     return new Promise((resolve) => setTimeout(()=>{
//         resolve("Dowloand Complete")
//     },3000))
// }
// async function tryDowloand() {
//     console.log("Dowloanding File .....")
//     let user = await dowloandFile();
//     console.log(user);
// }
// tryDowloand();


// simulate an API call that fails 50% of the time (randomly).

// function fakeApiCall(){
//     return new Promise((resolve , reject) => setTimeout(()=>{
//         let success = Math.random() > 0.5 ;
//         if(success){
//             resolve("Fetch Api Successfully");
//         }
//         else{
//             reject("Fetch Api Failed");
//         }
//     },2000))
// }

// async function getApi() {
//   console.log("Please I'm working on Api...");
//   try {
//     let user = await fakeApiCall();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getApi();


// Run 2 async tasks (taskA = 2s, taskB = 3s) together using Promise.all().

// function task1(){
//     return new Promise((resolve) => setTimeout(()=>{
//         resolve("Task 1 complete Successfully")
//     },2000))
// };
// function task2(){
//     return new Promise((resolve) => setTimeout(()=>{
//         resolve("Task 2 complete Successfully")
//     },3000))
// };

// async function all_Promise() {
//     console.log("Wait please we are working on your tasks.....")
//     let result = await Promise.all([task1() , task2()]);
//     console.log(result)
// }
// all_Promise();


// Create fakeLogin() that sometimes rejects. Use finally() to always print "Session Ended".


//  function fakeLogin(){
//     return new Promise((resolve , reject) => setTimeout(()=>{
//         let success = Math.random() > 0.5 ;
//         if(success){
//             resolve("Fetch Api Successfully");
//         }
//         else{
//             reject("Fetch Api Failed");
//         }
//     },2000))
// }

// async function getApi() {
//   console.log("Please I'm working on Api...");
//   try {
//     let user = await fakeLogin();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
//   finally{
//     console.log("Session End")
//   }
// }
// getApi();



// Chain 2 async functions — getUser() and getPosts() — where second waits for the first.


async function getUser(){
    return new Promise(resolve => setTimeout(() =>{
        resolve({id : 1 , name : "waqas"})
    },2000))
}

async function getPost(userId){
    return new Promise(resolve => setTimeout(() =>{
        resolve(["Post1" , "Post2" , "Post3"])
    },3000))
}

async function showUserPost() {
    console.log("Fetching User.....");
    let user = await getUser();
    console.log("Wait for user" , user.name);

    console.log("Fetching User Post" , user.name);
    let userPost = await getPost(user.id);
    console.log("Post" , userPost)
}

showUserPost();