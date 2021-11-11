//Crea una funció que rebi un paràmetre, 1 dni, i retorni la lletra. 
//Si el dni passat té algun error retornarà -1

function DniValidate(nums) {
    lletres = "TRWAGMYFPDXBNJZSQVHLCKE"
    let res=nums%23
    if (res>=0 && res<22) {
        return console.log(lletres[res])   
    } else {
        return console.log(-1)
    }
}