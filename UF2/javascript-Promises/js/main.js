//exercici 1
function wherami(latitud,longitud) {
    fetch("https://geocode.xyz/"+latitud+","+longitud+"?geoit=json ")
        .then(data => data.json())
        //exercici 3
        .then(data => {
            console.log(data)
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
                    
                })
        })
        //exercici 4
        .catch(error=>
            console.log(error)
        );
}
wherami(41.3879,2.16992)

