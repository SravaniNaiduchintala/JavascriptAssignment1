// 1.Variables
let x=100;
var name='sravani';
const panNumber=123456789;

// 2. Variable Names
// _userID (valid we can start variable name with underscore)
// myVariable (valid we can use camelcasing)
// $discount (valid we can start variable name with dollar sign)
// var (not valid we cannot use var as variablename as it is a reserved keyword.)
// 2ndPlace(not valid We cannot start with number.)
// total-amount (not valid we cannot use hypen.)


// 3. Data Types Introduction
// string
let name1="Sravani";

// number
let age=23;

// boolean
let bool =true;

//undefined
let y;

//null
let x1=null;
console.log(`My name is ${name1} and my age is ${age} do u know anything about ${x1}`);
console.log(name1,typeof(name1));
console.log(age,typeof(age));
console.log(bool,typeof(bool));
console.log(y,typeof(y));
console.log(x1,typeof(x1));

// 4.data Types
// 1. "42" -> string (primitive data type)
// 2. 42 -> number (primitive data type)
// 3.true -> boolean (primitive data type)
// 4.undefined -> primitive data type
// ["apple","banana"] -> array (object) (Non primitive data type)
// null (object primitive data type)

// 5.Data Type Checking
console.log(typeof("Hello World"));
console.log(typeof(42));
console.log(typeof(true));
console.log(typeof([1, 2, 3]));
console.log(typeof(undefined));

// 6.Strings
let firstName='Sravani';
let secondName='Chintala';
console.log(firstName +' '+ secondName);


// 7.Simple Math
let marks=35;
// Arithmetic operators
console.log(marks +=2);
console.log(marks-=5);
console.log(marks*=2);
console.log(marks/=2);

// 8.Basic console
console.log("Hello, Javascript!");
console.warn("Hello, Javascript!");
console.error("Hello, Javascript!");

// 9.Comments
// Single-line Comments ---> //
// Multi-line comments ---> /*.....*/

// 10.Assignment Operators
let num=10;
console.log(num+=5); // 15
console.log(num*=2); // 30
console.log(num -=7); //23
console.log(num/=3); //7.6
console.log(num%=4); //3.6


// 11.Assignment Operators
let x2=5; //5
let y2=x2++;
console.log("y2",y2); //5
let p=5;
let q=++p;
console.log("q",q); //6

// 12.Comaprision operators
let std_name="Madhavi";
let num1=10;
let num2=20;
let num3=10;
let str2='10';
let std_name2='Madhavi';
console.log(std_name==std_name2);
console.log(num1==num2);
console.log(num1==num3);
console.log(num1==str2);
console.log(num1===str2);
console.log(num1 != num2);
console.log(num1 !== num3);
console.log(num1 != str2);
console.log(num1 !== str2);
