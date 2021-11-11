//Escriviu una funció anomenada dates en JavaScript que rep un array de nombres p.ex  [14, 15, 16, 17], un mes en text p.ex “juny”,
// i un any, p.ex 2021 i retorna un array com l’exemple.  Exemple: dates([14, 15, 16, 17], ‘juny’,’2020’) 
// genera un array amb els següents elements: [“14-juny-2021”, “15-juny-2021”, “16-juny-2021”, “17-juny-2021”]

function dates(nombres,mes,any) {
    var data_Final=[]
    for (let i = 0; i < nombres.length; i++) {
        const element = nombres[i];
        data_Final.push(element+"-"+mes+"-"+any)
        
    }
    console.log(data_Final)
}