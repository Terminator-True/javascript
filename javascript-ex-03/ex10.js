//Fes una funció que comprovi que un array és homogeni, és a dir que tots els elements són del mateix tipus.
function exercici10(arr) {
    var tipo = typeof arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != tipo) {
            return false
        }
    }
    return true
}