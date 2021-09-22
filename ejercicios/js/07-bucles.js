'use strict'

var text="";
for (var i = 0; i < 5; i++) {
    console.log("Numero:"+i);

    text += "The number is " + i + "<br>";
    
    //debugger;

  }
text += "<hr/>";
document.write(text);


// ús de debugger watch

// while
text = "";
while (i < 10) {
    text += "The number is " + i + "<br>";
    i++;
}
text += "<hr/>";
document.write(text);


text = "";
do {
    text += "The number is " + i  + "<br>";
    i++;
}  while (i < 10);
text += "<hr/>";
document.write(text);


for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
text += "<hr/>";
document.write(text);

for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
text += "<hr/>";
document.write(text);


  