//exercici 1
function wherami(latitud,longitud) {
    fetch("https://geocode.xyz/"+latitud+","+longitud+"?geoit=json ")
        .then(data => data.json())
        //exercici 3
        .then(data => {
            //console.log(data)
            console.log("Esteu a "+data.city+", "+data.country) 

            //Exercici 5
              /*Nom oficial
                Monedes
                Idiomes
                Bandera
                Capital
                Habitants
                */
            fetch("https://restcountries.com/v3.1/name/"+data.country)
                .then(data_pais => data_pais.json())
                .then(data_pais =>{
                    console.log(data_pais)
                    let name = data_pais[0].name.common
                    let currencies= data_pais[0].currencies
                    let lang = data_pais[0].languages
                    for(var key in currencies){var moneda=key}
                    for(var key in lang){var idioma=lang[key]}
                    let capital = data_pais[0].capital
                    let population =data_pais[0].population
                    let flag = data_pais[0].flags.png
                    
                    let taula=`<table><tr><td><img src=${flag}><td><td><ul><li>Pais: ${name}</li><li>Moneda: ${moneda}</li><li>Idioma: ${idioma}</li><li>Capital: ${capital}</li><li>Habitans: ${population}</li><ul></td></tr></table>`
                    document.write(taula)
                })
        })
        //exercici 4
        .catch(error=>
            console.log(error)
        );
}
wherami(52.508,13.381);
wherami(19.037,72.873);
wherami(-33.933,18.474);

