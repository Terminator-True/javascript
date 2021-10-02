//Crea una funció que generi 100 números aleatoris entre 1 i 1000 que no es repeteixin i
// després mostra'ls per consola ordenats.

function aleatori() {
    const nums=[];
    for (let i = 0; i < 100; i++) {
        nums.push(Math.floor(Math.random() * 1000) + 1);

        
    }
    console.log(nums.sort())
}