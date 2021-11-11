
let PARAULES  = ["JAVASRIPT","PHP","PYTHON","JAVA","HTML","CSS","ANGULAR","VUE"]
let sopa =[["J","A","V","A","S","C","R","I","P","T"],
            ["-","-","P","H","P","-","-","-","-","-"],
            ["-","-","-","-","-","-","-","-","-","-"],
            ["-","-","P","Y","T","H","O","N","-","-"],
            ["-","-","-","-","-","-","H","T","M","L"],
            ["-","-","-","-","J","A","V","A","-","-"],
            ["-","-","C","S","S","-","-","-","-","-"],
            ["-","-","A","N","G","U","L","A","R","-"],
            ["-","-","-","-","-","-","-","-","-","-"],
            ["-","-","-","-","V","U","E","-","-","-"]]
let mida = 10
let LLETRES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let marcats = []
let fila = 0
let columna = 0

function generaSopaBuida() {
    for (let i = 0; i < mida; i++) {
        fila=[]
        for (let j = 0; j < mida; j++) {
            fila[j]=["-",0]
        }
        sopa[i]=fila
    }
    //console.log(sopa)
}

function comprovaParaula(sopa,paraula) {
        si=0
        fila = Math.floor(Math.random()* 10)
        columna = Math.floor(Math.random()* 10)
    for (let i =  fila; i < mida; i++) {
        for (let j = columna; j < mida; j++) {
            fila=sopa[i]
            caracter=fila[j]
            if (caracter[0]==="-") {
                si++;
                if (si==paraula.lenght) {
                    return True
                }
            }else{
                return False
            }
        }
    }
}


function ColocaParaula(sopa) {
    PARAULES.forEach(paraula => {
        if (comprovaParaula(sopa,paraula)) {
            for (let i = fila; i < sopa.length; i++) {
                files=sopa[i]
                for (let j = columna; j < paraula.length; j++) {
                    row = files[j]
                    row[0] = paraula[j] 
                    files[j]=row[0]
                }                
                sopa[i]=files
            }
        }
    });
}

function generaTaula(sopa) {
    id=0
    document.write("<table id='taula'>")
    for (let i = 0; i < sopa.length; i++) {
        fila=sopa[i]
        document.write("<tr>")
        for (let j = 0; j < fila.length; j++) {  
            id++; 
            row=fila[j]  
            document.write("<td id='"+id+"' onclick=canvia("+id+",color='groc')>"+row[0]+"</td>")       
        }        
        document.write("</tr>")
    }
    document.write("</table>")
}
//generaSopaBuida()
//ColocaParaula(sopa)
generaTaula(sopa)


function canvia(id,color) {
    document.getElementById(id).classList.add(color)
    marcats.push(id)
}

function valida() {
        let paraula=""
    for (let i = 0; i < marcats.length; i++) {
        paraula=paraula+document.getElementById(marcats[i]).innerText
    }
    console.log(paraula)
    for (let j = 0; j < PARAULES.length; j++) {
        if (PARAULES[j]==paraula) {
            document.getElementsByClassName('groc').classList.replace('groc','blau')
        }
    }   
    marcats = []
}