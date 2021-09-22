'use strict'



// Object
//operadors i tipus de dades

// Operadors aritmètics
/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*/


//operadors d'assignació

/*
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
*/

//de comparació

/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator (condition ? expr1 : expr2 )
*/

//lògics

/*
&&	logical and
||	logical or
!	logical not
*/

//Saber el tipus d'un operador

/*
typeof	Returns the type of a variable
instanceof	Returns true if an object is an instance of an object type
*/
const name = 'Bruce';
const age = 18;
const isDeveloper = true;

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isDeveloper); // boolea

const fn = function() { return null; };
const arr = [];
const obj = {};

console.log(typeof fn); // function
console.log(typeof arr); // object
console.log(typeof obj); // object

//////////////////

const fnn = function() { return null; };
const nan = NaN;

console.log(typeof fnn()); // object
console.log(typeof nan); // number :v

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Tesla() {
    this.autodrive = true;
}
Car.prototype = new Tesla();

const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car); // true
console.log(auto instanceof Tesla); // true


//de bit
/*
Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	Zero fill left shift	5 << 1	0101 << 1	1010	 10
>>	Signed right shift	5 >> 1	0101 >> 1	0010	  2
>>>	Zero fill right shift	5 >>> 1	0101 >>> 1	0010	  2

*/

//Tipus dades

4 > 3 // true

4 >= 3 // true
3 >= 3 // true

3 < 4 // true
3 <= 4 // true

    'foo' === 'foo' // true

var a = new String('foo');
var b = new String('foo');

a == b // false
a === b //false



var length = 16; // Number
var lastName = "Johnson"; // String
var objecte = {
    firstName: "John",
    lastName: "Doe"
}; // Object

var y = 123e5; // 12300000
var z = 123e-5; // 0.00123

var x = 5;
var y = 5.0;
var z = "5";

console.log(x === y); // Returns true
console.log(x == y); // Returns true
console.log(x == z); // Returns true
console.log(x === z); // Returns false

var cars = ["Saab", "Volvo", "BMW"];

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// typeof -> number

var car; // Value is undefined, type is undefined

person = null; // Ara la value és null, però el tipus és un objecte
person = undefined; // Ara tan valor com tipus undefined

typeof undefined; // undefined
typeof null; // object

null === undefined; // false
null == undefined // true


/*  Tipus primitius 
   string
   number
   boolean
   object
   undefined

*/

var boolea = true;

var numero_fals = "33.5";
var numero = 24;

console.log(numero_fals + 5);
console.log(Number(numero_fals) + 5);

console.log(parseInt(numero_fals) + 5);
console.log(parseFloat(numero_fals) + 5);

console.log(numero + Number(numero_fals));
console.log(String(numero) + numero_fals);


3 === 3 // true
3 === '3' // false
var object1 = { 'key': 'value' },
    object2 = { 'key': 'value' };
object1 === object2 // false