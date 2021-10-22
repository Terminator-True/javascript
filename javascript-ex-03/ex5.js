//Fes una funció en javascript que donat un array numèric, i utlitzant funcions de fletxa:
//=> una funció que mostra quants nombres senars hi ha
//=> una funció que  retorna la mitjana de tots els elements de l’array
//=> una funció que retorna el més gran
//=>una funció que retorna el més petit

senars = 0
<<<<<<< HEAD
function operacions(ll) {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const Dsenars = num => {if(num%2!=0)senars+=1}  
    const mitjana = ll => ll.reducer()/ll.length    
    const gran = ll => Math.max.apply(ll)
    const petit = ll => Math.min.apply(ll)
 
    


    console.log(mitjana(),gran(),petit(),senars)

}
=======
function imprimir(ll) {

    var senarnum = 0;

    var senars = (ll) => {
        for (let i = 0; i < ll.length; i++) {
            if(ll[i]%2!=0){
                senarnum+=1;
            }
        }
        return senarnum;
    }
    var mitjana = ll => (ll.reduce((x,y) => x+=y))/ll.length
    var gran = ll => Math.max.apply(null,ll)
    var petit = ll => Math.min.apply(null,ll)

    console.log(mitjana(ll),gran(ll),petit(ll),senars(ll))

}
>>>>>>> 7a6e90eff89d2883271ea9e7b642d00bc08d96f5
