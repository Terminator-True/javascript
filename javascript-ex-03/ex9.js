//Fes una funció que donats 2 arrays, (genera els arrays aleatòriament) retorni la intersecció,
// és a dir els elements que estan en ambdós arrays, 
//aquest array ha de ser únic (cada element només pot aparèixer una vegada)

function exercici9() {
    let ll=[]

    function crea() {
        var arr=[];
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor(Math.random()* (10 - 1))+1)
        }
        return arr
    }

    const distinct = (value, index, self) => {
        return self.indexOf(value) === index;
    }

    let arr1 = crea()
    let arr2 = crea()

    let arr1u = arr1.filter(distinct);
    let arr2u = arr2.filter(distinct);

    if (arr1u.length< arr2u.length) {
        long = arr2u.length
    }else{
        long = arr1u.length
    }

    for (let i = 0; i < long; i++) {
        for (let j = 0; j < i; j++) {
            if (arr1u[i] == arr2u[j]) {
                ll.push(arr2u[j])
            }
        }
    }
    return ll
}