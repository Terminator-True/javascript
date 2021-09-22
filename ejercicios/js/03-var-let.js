'use strict';

// diferència entre var (global) i let (en el bloc)


////////////////////////////////////////
////////// VAR /////////////////////////


function explainVar() {
    var a = 10;
    console.log(a); // output 10
    if (true) {
        var a = 20;
        console.log(a); // output 20
    }
    console.log(a); // output 20
}


/* En Javascript les variables són "hoisted" o "hissades". 
Això, com el seu nom indica, vol dir que una variable 
és hissada (pujada) fins al límit de la funció o 
fins arribar a l'inici de l'Window Object. Quan 
no declarem una variable, Javascript la crea al 
Window Object. Arribant fins i tot a reassignar el 
valor d'aquesta sense demanar-nos permís. Per 
descomptat això és horrible, perquè pots acabar 
creant variables globals i 
reassignant valors sense adonar-te'n.

Si declarem la variable dins d'una funció IIFE 
(Inmediately Invoked Function Expression), 
el valor de la nostra variable viurà només 
dins de l'scope d'aquesta funció. 
Per tant, fora de explainVar () la nostra 
variable pren el valor assignat prèviament. Però ...
*/


var i = 60;
(function explainVar() {
    for (i = 0; i < 5; i++) {
        console.log(i) //Output 0, 1, 2, 3, 4
    }
})();
console.log("Despres del loop", i) // Output 5


//////////////////// LET ////////////////////////////
var i = 60;
(function explainVar() {
    for (let i = 0; i < 5; i++) {
        console.log(i) //Output 0, 1, 2, 3, 4
    }
})();
console.log("Despres del loop", i) // Output 60

/* Funciona d'acord al que s'esperava! 
Això passa perquè let introdueix el "block scope". 
La variable assignada com let només 
serà accessible dins el for loop. */

function explainLet() {
    let a = 10;
    console.log(a); // output 10
    if (true) {
        let a = 20;
        console.log(a); // output 20
    }
    console.log(a); // output 10
}

function explainLet() {
    let aa = 10;
    //let aa = 20; //throws syntax error
    console.log(aa);
}

var num = 40;
let unaVarLet = 5;
// diferència

var carName = "Volvo";


// code here can use carName

function myFunction() {
    // code here can also use carName
}

///////////////////////////////////

// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName

{
    var x = 2;
}
// x CAN be used here

{
    var x = 2;
}
// x CAN be used here

////////////////////////////////
////        EXEMPLE 1     //////
////////////////////////////////

var x = 10;
// Aquí x val 10
{
    var x = 2;
    // Aquí x val 2
}
// Aquí x val 2, la variable x té abast global


var x = 10;
// Here x is 10
{
    let x = 2;
    // Here x is 2
}
// Here x is 10

////////////////////////////////
////        EXEMPLE 2     //////
////////////////////////////////

/*
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10

*/
/*
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}
// Here i is 5

*/
///////////////////////////////////
//They will both have Global Scope:

/*
var x = 2;       // Global scope
let x = 2;       // Global scope
*/
//In HTML, the global scope is the window object.

////////////////////////////////////
////     const                   ///
////////////////////////////////////

/* Const és igual que let, 
amb una petita gran diferència: 
no pots re assignar el seu valor.

Al meu entendre és ideal utilitzar const 
si no has de re assignar el valor de la 
variable en cap moment. 
Per què? Bueeeno ... Volem minimitzar 
l'estat de mutació o "mutable state". 
És important saber que al nostre codi 
estaran corrent molts processos alhora. 
Cada que facis servir let és bo analitzar 
si realment canviarà el valor d'aquesta 
variable en algun moment. 
Si no és així, utilitza const

*/

function explainConst() {
    const x = 10;
    console.log(x); // output 10
}

function explainConst() {
    const x = 10;
    console.log(x); // output 10
    x = 20; //throws type error
    console.log(x);
}

const ii = 0;
// ii = 1; // TypeError: Assignment to constant variable

const user = { name: 'Joan' };
user.name = 'Maria';
console.log(user.name); // Maria