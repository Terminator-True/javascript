//Fes una funció en javascript que donada una quantitat d’euros ens retorni el seu valor en tres tipus de monedes. 
//Utilitza les funcions de callBack, (és a dir funcions com expressions)

function divisa() {
    let euros = prompt("Quantitat en Euros ")
    function Mostra(euros,euroDolar,euroYen,euroBit) {
        document.write(euros+" euros"+" | "+euroYen(euros)+" Yen" +" | "+euroBit(euros)+" Bitcoin"+" | "+euroDolar(euros)+" Dolars")
    }

    Mostra(euros,EuroDolar = euros => euros*1.16,EuroYen = euros =>euros*128.77134,EuroBit = euros => euros*0.000026)
}