//Fes una funció en javascript que donat un array retorni quin és l’element que té més repeticions.


const contar = ar => ar.reduce((acum, el, i, ar) => {
    const count=ar.filter(e => e==el).length;
    return count > acum[1] ? [el, count] : acum;
}, ["", 0]
)

