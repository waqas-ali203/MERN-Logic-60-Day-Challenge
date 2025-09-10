/*      DAY 1   Variables & Data Types */

// Variables
// var : Purana style, function scope, re-declare ho sakta hai.

// let : Block scope, re-declare nahi ho sakta.

// const : Constant value, change nahi hoti.

// var x = 10;
// let y = 20;
// const z = 30;
// console.log(x,y,z)

// Redeclare with var

// var  x = 20;
// var x = 30;
// console.log(x)   // 30

// let cannot declare

// let w = 20;
// let w = 20;
// console.log(w)   // w has already declared

// Data Types

// Primitive: [it store actual value in memory] string, number, boolean, null, undefined, symbol, bigint

// let str = "Hello"; // string
// let num = 42; // number
// let bool = true; // boolean
// let und; // undefined
// let nul = null; // null
// console.log(typeof str, typeof num, typeof bool, typeof und, typeof nul);

// Reference: [ it store address/reference of the actual value in memory] objects, arrays, functions

// let arr = [1, 2, 3];
// console.log(arr);

// let person = { name: "Ali", age: 22 };
// console.log(person);

// function greet() {
//   return "Hello World";
// }
// console.log(greet());

// Type Conversion

// Explicit:  Number("123"), String(123)    [ programmer  change manually datatype]

// Implicit: "5" + 2 → "52"  [ JS automatically chnage  kr deta  hu datatype ko ak dosry me ]

/*      DAY 2   Operators & Expressions */
/*      DAY 2   Operators & Expressions */

// Arithmetic Operators (+, -, *, /, %, **)

// let a = 10;
// let b = 3;

// console.log(a + b); // 13 (Addition)
// console.log(a - b); // 7  (Subtraction)
// console.log(a * b); // 30 (Multiplication)
// console.log(a / b); // 3.333... (Division)
// console.log(a % b); // 1 (Remainder)
// console.log(a ** b); // 1000 (Exponentiation a^b)

// Assignment Operators (=, +=, -=, *=, /=, %=)

// let x = 5;
// x += 3; // x = x + 3
// console.log(x); // 8

// x -= 2; // x = x - 2
// console.log(x); // 6

// x *= 4; // x = x * 4
// console.log(x); // 24

// x /= 6; // x = x / 6
// console.log(x); // 4

// x %= 3; // x = x % 3
// console.log(x); // 1

// Comparison Operators (==, ===, !=, !==, >, <, >=, <=)

// let p = 5;
// let q = "5";

// console.log(p == q); // true (value check only)
// console.log(p === q); // false (value + type check)

// console.log(p != q); // false (same value)
// console.log(p !== q); // true (different type)

// console.log(p > 3); // true
// console.log(p < 10); // true
// console.log(p >= 5); // true
// console.log(p <= 4); // false

// Logical Operators (&&, ||, !)

// let age = 20;
// let hasID = true;

// console.log(age >= 18 && hasID); // true (AND)
// console.log(age >= 18 || hasID); // true (OR)
// console.log(!(age >= 18)); // false (NOT)

// Ternary Operator (shortcut of if/else)

// let marks = 75;
// let result = (marks >= 50) ? "Pass" : "Fail";
// let result2 = (marks % 2 == 0) ? "even" : "odd";
// console.log(result); // Pass
// console.log(result2); // odd

// Increment / Decrement Operators

// let num = 5;

// console.log(num++); // 5 (pehle print, phir increment)
// console.log(num);   // 6

// console.log(++num); // 7 (pehle increment, phir print)

// console.log(num--); // 7 (pehle print, phir decrement)
// console.log(num);   // 6

// console.log(--num); // 5 (pehle decrement, phir print)

/*      DAY 3   Control Flow (if/else, switch, loops) */

// if / else if / else

let marks = 85;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 75) {
  console.log("Grade A");
} else if (marks >= 50) {
  console.log("Grade B");
} else {
  console.log("Fail");
}


let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid Day";
}

console.log(dayName); // Wednesday

