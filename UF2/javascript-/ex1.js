function cotxe(marca,velocitat) {
     this.marca = marca;
     this.velocitat = velocitat;
}

cotxe.prototype.accelerar = function(velocitat) {
    console.log(velocitat+10+" km/h")
}

cotxe.prototype.fre = function(velocitat) {
    console.log(velocitat-5+" km/h")
}

const cotxes = array(cotxe("Porsche",80),cotxe("Seat",50),cotxe("volkswagen",120),cotxe("volkswagen",30),cotxe("Tesla",160))

console.log(cotxes)