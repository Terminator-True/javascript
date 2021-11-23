function wherami(data) {return "Ciutat: "+data.city+" Pais: "+data.country}

    latitud=prompt("Latitud")
    longitud=prompt("longitud")
    fetch("https://geocode.xyz/"+latitud+","+longitud+"?geoit=json ")
        .then(data => data.json())

        .then(data => {
            let promise = new Promise(function (resolve,reject) {
                whereami((data) => resolve("correcte!"));
            })
            document.write(imprimir)
        })
    