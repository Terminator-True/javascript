//Fes una funció en javascript que donat un array numèric, i utlitzant funcions de fletxa:
//=> una funció que mostra quants nombres senars hi ha
//=> una funció que  retorna la mitjana de tots els elements de l’array
//=> una funció que retorna el més gran
//=>una funció que retorna el més petit


senars = 0
function imprimir(ll) {
    
    ll.forEach(senars(item))

    senars = item => {if(item%2!=0)senars+=1}
    mitjana => (ll.reduce((x,y) => x+=y))/ll.length
    gran => Math.max.apply(ll)
    petit => Math.min.apply(ll)

    console.log(mitjana,gran(),petit(),senars())
}
