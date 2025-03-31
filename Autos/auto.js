"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auto = void 0;
var auto = /** @class */ (function () {
    function auto(pMarca, pModelo, pAnio) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAnio;
    }
    auto.prototype.acelerar = function () {
        console.log("El ".concat(this.marca, " ").concat(this.modelo, " del a\u00F1o ").concat(this.anio, " se encuentra acelerando."));
    };
    auto.prototype.frenar = function () {
        console.log("El ".concat(this.marca, " ").concat(this.modelo, " del a\u00F1o ").concat(this.anio, " esta frenando."));
    };
    return auto;
}());
exports.auto = auto;
