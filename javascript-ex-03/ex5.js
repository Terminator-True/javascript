//Fes una funció en javascript que donat un array numèric, i utlitzant funcions de fletxa:
//=> una funció que mostra quants nombres senars hi ha
//=> una funció que  retorna la mitjana de tots els elements de l’array
//=> una funció que retorna el més gran
//=>una funció que retorna el més petit


senars = 0
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
