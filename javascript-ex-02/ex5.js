//Fes una funció en javaScript que li passem una frase i retorna la paraula més llarga de la frase.

function llarga(frase) {
    var paraules = frase.split(" ")
    var paraulaL = ""
        for (let i = 0; i < paraules.length; i++) {
            const element = paraules[i];
            if (element.length> paraulaL.length){
                paraulaL = element
            }
            
        }
    console.log(paraulaL)
}