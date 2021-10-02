//Fes una funció en javascript que retorni el nombre de vegades que un determinat caràcter apareix en un string.

function Caracter() {
    let lletra=prompt("Posa una lletra")
    let p=prompt("Posa un string")
    lenp=p.length
    console.log(p.split(lletra).length-1)
}