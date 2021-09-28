 //Escriviu una funció JavaScript que giri  un número que ha introduit l’usuari. Exemple x = 123456789; x=987654321;
 function giraNum() {
    let num;
    do {
        num=prompt("Numeros: ")
    } while (isNaN(num));
    document.write(num.split("").reverse().join(""))

}