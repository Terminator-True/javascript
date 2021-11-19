'use strict';

var user=[];
fetch("https://reqres.in/api/users/2")
    .then(data => data.json())
    .then(data => {
        user = data;
        document.getElementById("usuari2").innerHTML=user.data.first_name+" "+user.data.last_name
    })
       

