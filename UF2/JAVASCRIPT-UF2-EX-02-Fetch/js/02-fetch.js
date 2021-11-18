'use strict';

var user=[];
document.write("<hr>")
fetch("https://reqres.in/api/users/2")
    .then(data => data.json())
    .then(data => {
        user = data;
        console.log(user);
        document.write(user.first_name+" "+user.last_name)
    })
       

