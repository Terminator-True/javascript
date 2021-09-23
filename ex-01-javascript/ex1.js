//Feu un programa que demani dos nombres i ens digui amb una alerta, si són iguals,o bé quin és el més gran i quin és el més petit. (feu el programa robust)
//Afegeix que si el nombres no són de tipus nombre o bé són negatius, que els torni a demanar. Ajuda isNaN();

function esigual() {  
    let num1,num2;  
    do{
        num1=prompt("Numero 1 ?")
        num2=prompt("Numero 2 ?")
    }while(isNaN(num1) || isNaN(num2) && num1<0 || num2<0)

    if (num1 == num2) {
        alert("Els numeros son iguals")

    } else{
        if (num1>num2) {
            alert("El primer numero es mes gran que el segon ")
        }else{
            alert("El segon es mes gran que el primer")

        }
    }
}