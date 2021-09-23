//Utilitzant un bucle demana a l’usuari  nombres introduïts per teclat fins que introdueix un nombre negatiu. És a dir, 
function mitjana() {
    let num=0,total=0,i =0;
    do {
        num=prompt("Numero: ");
        if (isNaN(num)){
            alert("No es un numero")
        } else{
            i++
            total+=num 
        }
    } while (num>0);
    alert(i)
    alert(total)
    let resultat=total/i    
    alert(resultat)
}   