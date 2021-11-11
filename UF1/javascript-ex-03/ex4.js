//Fes una funció en javascript que retorni el primer element d’un array que li passem com a paràmetre, en cas que tingui 2 paràmetres, 
//el segon element indicarà que retorni el n primers elements:

function Imprimir(ll,n=1) {
    return ll.slice(0,n)
}