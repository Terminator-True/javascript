class persona {
    private nom: string
    private cognom : string

    constructor(nom:string,cognom:string) {
        this.nom=nom
        this.cognom=cognom
    }
    //Getters
    public get_nom() : string {
        return this.nom
    }
    public get_cognom() : string {
       return this.cognom
    }
    //Setters
    public set_nom(nom:string) : void {
        this.nom=nom
    }
    public set_cognom(cognom:string) : void {
        this.cognom=cognom
    }
    //Méthods
    public get_nom_complert() : string {
        return this.nom+" "+this.cognom
    }
    
}
class treballador extends persona {
    numero: number
    sou : number

    constructor(nom:string,cognom:string,numero:number,sou:number) {
        super(nom,cognom)
        this.numero=numero
        this.sou=sou
    }

    public get_numero() : number {
        return this.numero
    }
    public get_sou() : number {
       return this.sou
    }
    //Setters
    public set_numero(numero:number) : void {
        this.numero=numero
    }
    public set_sou(sou:number) : void {
        this.sou=sou
    }

}

function llistar(persones:Array<string>) {
    persones.forEach(element => {
        console.log(element)
    });
}

function despeses_salarials(treballadors:Array<treballador>) {
    var total=0;
    treballadors.forEach(element => {
        total=total+element.get_sou()
    });
    return total
}
interface pet {
    eat():void
    sleep():void
}

class cat implements pet {
    private mew:boolean
    constructor(mew :boolean){
        this.mew =mew;
    }
    public eat() {
        console.log("gat menja");
    }
    public sleep() {
        console.log("gat dorm");
    }
}

class dog implements pet{
    private bark  :boolean;

    constructor(bark  :boolean){
        this.bark = bark;
    }
    public eat(){
        console.log("gos menja")
    }
    public sleep(): void {
        console.log("gos dorm")
    }
}

class bird implements pet{
    private tweet:boolean;

    constructor(tweet :boolean){
        this.tweet = tweet;
    }
    public eat(){
        console.log("ocell menja")
    }
    public sleep(): void {
        console.log("ocell dorm")
    }
}

let guy=new persona("Joel","Farell");
guy.set_nom("Joan")
//console.log(guy.get_nom_complert())
var persones = [new persona("Joe","Doe").get_nom_complert(),new persona("Jane","Dane").get_nom_complert(),new persona("George","Smith").get_nom_complert()]
var treballadors = [new treballador("Joe","Doe",1,1000),new treballador("Jane","Dane",2,1200),new treballador("George","Smith",3,2500)]
//llistar(persones)
//console.log(despeses_salarials(treballadors))
var gat=new cat(true);
gat.eat();
gat.sleep();
var gos=new dog(true);
gos.eat();
gos.sleep();
var pajaro=new bird(true);
pajaro.eat();
pajaro.sleep();