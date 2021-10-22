//Donat un array multidimensional, on cada element és un array de tres elements:
//Preu Unitari
//Unitats
//IVA
function exercici8() {

    var matriu=[];

    for (let i = 0; i < 1000; i++) {
        if (Math.floor(Math.random()*10)>=5) {
            iva = 0.10
        }else{
            iva = 0.21
        }
        matriu.push([Math.floor(Math.random() * 1000),iva,Math.floor(Math.random() * 10)])
    }

    console.log(matriu)

    for (let j = 0; j < matriu.length; j++) {
        function ImportsF(values,index,array) {return values[0]}
        function iva(values,index,array) {return values[1]}
        function pvp(values,index,array) {return values[2]}

        var importsF=matriu.map(ImportsF);
        var IVA=matriu.map(iva);
        var PVP=matriu.map(pvp);
        
    }
    
    for (let k = 0; k < matriu.length; k++) {
        document.write(importsF[k]*PVP[k]+" euros (Sense IVA)"+"<br>")
        document.write(importsF[k]*PVP[k]*IVA[k]+" euros (AMB IVA)"+"<br>")
        
    }
}