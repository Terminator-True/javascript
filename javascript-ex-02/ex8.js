//Definiu una funció de fletxa dividirXDos que accepta un número i retorna aquest número dividit per 2. 
//Fes una funció genèrica, 
//que rep un array i una funció i l’aplica a tots els elements de l’array. 

function aplica(elements,dividir) {
    for (let i = 0; i < elements.length; i++) {
        document.write("|",dividir(elements[i]))
        
    }
}