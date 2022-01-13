var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var persona = /** @class */ (function () {
    function persona(nom, cognom) {
        this.nom = nom;
        this.cognom = cognom;
    }
    //Getters
    persona.prototype.get_nom = function () {
        return this.nom;
    };
    persona.prototype.get_cognom = function () {
        return this.cognom;
    };
    //Setters
    persona.prototype.set_nom = function (nom) {
        this.nom = nom;
    };
    persona.prototype.set_cognom = function (cognom) {
        this.cognom = cognom;
    };
    //Méthods
    persona.prototype.get_nom_complert = function () {
        return this.nom + " " + this.cognom;
    };
    return persona;
}());
var treballador = /** @class */ (function (_super) {
    __extends(treballador, _super);
    function treballador(nom, cognom, numero, sou) {
        var _this = _super.call(this, nom, cognom) || this;
        _this.numero = numero;
        _this.sou = sou;
        return _this;
    }
    treballador.prototype.get_numero = function () {
        return this.numero;
    };
    treballador.prototype.get_sou = function () {
        return this.sou;
    };
    //Setters
    treballador.prototype.set_numero = function (numero) {
        this.numero = numero;
    };
    treballador.prototype.set_sou = function (sou) {
        this.sou = sou;
    };
    return treballador;
}(persona));
function llistar(persones) {
    persones.forEach(function (element) {
        console.log(element);
    });
}
function despeses_salarials(treballadors) {
    var total = 0;
    treballadors.forEach(function (element) {
        total = total + element.get_sou();
    });
    return total;
}
var cat = /** @class */ (function () {
    function cat(mew) {
        this.mew = mew;
    }
    cat.prototype.eat = function () {
        console.log("gat menja");
    };
    cat.prototype.sleep = function () {
        console.log("gat dorm");
    };
    return cat;
}());
var dog = /** @class */ (function () {
    function dog(bark) {
        this.bark = bark;
    }
    dog.prototype.eat = function () {
        console.log("gos menja");
    };
    dog.prototype.sleep = function () {
        console.log("gos dorm");
    };
    return dog;
}());
var bird = /** @class */ (function () {
    function bird(tweet) {
        this.tweet = tweet;
    }
    bird.prototype.eat = function () {
        console.log("ocell menja");
    };
    bird.prototype.sleep = function () {
        console.log("ocell dorm");
    };
    return bird;
}());
var guy = new persona("Joel", "Farell");
guy.set_nom("Joan");
console.log(guy.get_nom_complert());
var persones = [new persona("Joe", "Doe").get_nom_complert(), new persona("Jane", "Dane").get_nom_complert(), new persona("George", "Smith").get_nom_complert()];
var treballadors = [new treballador("Joe", "Doe", 1, 1000), new treballador("Jane", "Dane", 2, 1200), new treballador("George", "Smith", 3, 2500)];
llistar(persones);
console.log(despeses_salarials(treballadors));
var gat = new cat(true);
gat.eat();
gat.sleep();
var gos = new dog(true);
gos.eat();
gos.sleep();
var pajaro = new bird(true);
pajaro.eat();
pajaro.sleep();
