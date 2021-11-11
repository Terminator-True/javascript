function exercici7(arr) {
    //1. demani 6 números per teclat i els posis en un array,
    //2. En una funció ha de mostrar tots els elements de l'array en el body amb una llista desordenada (un a un "forEach") i en la consola (de cop),
    //3. Ordenar i mostrar l'array numèricament (reutilitzem el mostrar)
    //4. Girar l'array i mostra’l
    //5. Mostra quants elements té l'array
    //6. Fer una funció que permet cercar un valor introduït per l'usuari i retorni l'índex./
    /*
    // 1.
    let arr=[]
    for (let i = 0; i < 6; i++) {
        num = prompt("num: ");
        arr.push(num);
    }
    */
    console.log ("ex2.")
    function mostrar(arr) {
        let mostra=[]
        arr.forEach(element => {
            console.log(element)
            mostra.push(element)
        });
        return mostra;
    }
    console.log(mostrar(arr));

    console.log("ex3.")
    function comparar(a, b) {
        return a - b;
    }
    ordenat = mostrar(arr.sort(comparar))

    console.log("ex4.")
    console.log (girar= ordenat.reverse());

    console.log("ex5.")
    console.log(girar.length);

    console.log("ex6.")
    function cercar(num) {
        return arr.indexOf(num)
    }
    console.log(cercar(101))
}