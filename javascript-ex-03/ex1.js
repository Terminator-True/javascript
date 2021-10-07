//Escriviu una funció  que crea una nou array amb valors donats


function CreaArray(caracter,num) {
    const caracters = []
    for (let i = 0; i < num; i++) {
        caracters.push(caracter)   
    }
    console.log(caracters)
}