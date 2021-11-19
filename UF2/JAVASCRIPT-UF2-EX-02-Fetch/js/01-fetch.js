'use strict';

var usuaris = [];
fetch("https://reqres.in/api/users")
    .then(data => data.json())
    .then(data => {
        usuaris = data;
        //console.log(usuaris);
        var imprimir = ""
        imprimir = imprimir +"\n"+"<table>"
        usuaris.data.forEach(user => {
            imprimir = imprimir +"\n"+"<tr>"
            imprimir = imprimir +"\n"+"<td>"+user.id+"</td>"
            imprimir = imprimir +"\n"+"<td> <img src='"+user.avatar+"'</td>"     
            imprimir = imprimir +"\n"+"<td>"+user.first_name+"</td>"      
            imprimir = imprimir +"\n"+"<td>"+user.last_name+"</td>"
            imprimir = imprimir +"\n"+"<td>"+user.email+"</td>"    
    
            imprimir = imprimir +"\n"+"</tr>"

        });
        console.log(imprimir)
        document.getElementById("usuaris").innerHTML=imprimir

    })
       

