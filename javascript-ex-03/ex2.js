//Escriviu una funció que elimini de l’array tots els elements innecessaris, com ara cadenes buides, falses, indefinides, zero, nul·les
function elimina(ll) {
    const no = [false,undefined,'',' ',null,0]
    sortir = false
    i=0
    while (!sortir) {
        console.log(i)
        if (no.includes(ll[i])) {
            ll.splice(i,1)
        }else i++
        if (i==ll.length)sortir=true
    }   
    console.log(ll)

}