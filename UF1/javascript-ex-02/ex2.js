//Escriviu una funció que és capaç de tractar de diferents maneres un array que li passem com a paràmetre, 
//aquest array és una llista d’anys de naixement. Els diferents càlculs que ha de fer són:
//l’edat
//si són majors d’edat un array de booleans (cert o fals) 
//quants anys els falta per jubilar-se (si ja ho estan retorna -1)

//El resultat és mostrarà per la consola.

//L’estructura ha de ser una funció genèrica anomenada per exemple “tractaAnys()” que rep per paràmetre l’array amb els anys de naixement i 
//la funció que tracta aquests anys. Escriu 3 crides, amb la funció definida a part, amb la funció definida a la crida, i amb la funció definida a la crida, 
//però de fletxa.

function edat(element){return 2021 - element}
function major(element) {return edat(element)>=18}
function jubilar(element) {return edat(element)>=67}


function Procesa_dates(dates) {
    console.log(dates)
    function tractaAnys(fn,dates){
        
        const informacio=[]
        for (let i = 0; i < dates.length; i++) {
            const element = dates[i];
            informacio.push(fn(dates[i]))
    }
        console.log(informacio)
}
tractaAnys(jubilar,dates)

tractaAnys(function jubilarse(element) {return (67-edat(element))},dates)

tractaAnys(element => 2021 - element ,dates)




}
