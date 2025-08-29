// 1. var, let, const difference
var x = 10;
let y = 20;
const z = 30;
console.log(x, y, z);

// 2. Re-declaration with var
var a = 5;
var a = 10; 
console.log(a); // 10

// 3. let cannot re-declare
let b = 15;
// let b = 20;  error

// 4. const value cannot change
const PI = 3.14;
// PI = 3.14159;  error

// 5. Primitive data types
let str = "Hello"; // string
let num = 42; // number
let bool = true; // boolean
let und; // undefined
let nul = null; // null
console.log(typeof str, typeof num, typeof bool, typeof und, typeof nul);

// 6. Reference type (array)
let arr = [1, 2, 3];
console.log(arr);

// 7. Reference type (object)
let person = { name: "Ali", age: 22 };
console.log(person);

// 8. Function as reference
function greet() {
  return "Hello World";
}
console.log(greet());

// 9. Implicit type conversion
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3

// 10. Explicit type conversion
console.log(Number("123")); // 123
console.log(String(123));   // "123"

// 11. Boolean conversion
console.log(Boolean(0));    // false
console.log(Boolean(1));    // true
console.log(Boolean(""));   // false
console.log(Boolean("Hi"));// true

// 12. typeof operator examples
console.log(typeof 42);         // number
console.log(typeof "Hello");    // string
console.log(typeof true);       // boolean
console.log(typeof {});         // object
console.log(typeof []);         // object (array is special object)
console.log(typeof null);       // object (historical JS bug)
console.log(typeof undefined);  // undefined

let a = 10;
let b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1 (Remainder)
console.log(a ** b); // 1000 (Exponentiation a^b)
