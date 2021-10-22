//Fes una funció en javascript que donat un array numèric, i utlitzant funcions de fletxa:
//=> una funció que mostra quants nombres senars hi ha
//=> una funció que  retorna la mitjana de tots els elements de l’array
//=> una funció que retorna el més gran
//=>una funció que retorna el més petit

senars = 0
function operacions(ll) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const Dsenars = num => {if(num%2!=0)senars+=1}  
    const mitjana = ll => ll.reducer()/ll.length    
    const gran = ll => Math.max.apply(ll)
    const petit = ll => Math.min.apply(ll)
 
    


    console.log(mitjana(),gran(),petit(),senars)

}