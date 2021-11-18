'use strict';

var usuaris = [];

fetch("https://reqres.in/api/users")
    .then(data => data.json())
    .then(data => {
        usuaris = data;
        //console.log(usuaris);
        document.write("<table>")
        
        usuaris.data.forEach(user => {
            document.write("<tr>")
                document.write("<td>"+user.id+"</td>") 
                document.write("<td> <img src='"+user.avatar+"'</td>")       
                document.write("<td>"+user.first_name+"</td>")       
                document.write("<td>"+user.last_name+"</td>")   
                document.write("<td>"+user.email+"</td>")       
    
            document.write("<tr>")
        });
        document.write("</table>")

    })
       

