 //Escriviu una funció JavaScript que giri  un número que ha introduit l’usuari. Exemple x = 123456789; x=987654321;
 function giraNum() {
    let num;
    do {
        num=prompt("Numeros: ")
    } while (isNaN(num));
    //Agafem el string num i el passem a array amb split, li donem la volta amb reverse i amb el join ho tornem a convertir en str
    document.write(num.split("").reverse().join(""))

}