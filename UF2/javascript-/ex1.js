function cotxe(name,marca,velocitat) {
     this.name = name;
     this.marca = marca;
     this.velocitat = velocitat;
}

cotxe.prototype.accelerar = function(velocitat) {
    console.log(velocitat+10+" km/h")
}

cotxe.prototype.fre = function(velocitat) {
    console.log(velocitat-5+" km/h")
}

const cotxes = array(cotxe("Porsche",80),cotxe("Seat",50),cotxe("Seat",120))