"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(Pmarca, Pmodelo, PsistemaOperativo, PmemoriaRam, PalmacenamientoInterno, PestadoDeEncendido) {
        if (Pmarca === void 0) { Pmarca = "Xiaomi"; }
        if (Pmodelo === void 0) { Pmodelo = "Redmi Note"; }
        if (PsistemaOperativo === void 0) { PsistemaOperativo = "Android"; }
        if (PmemoriaRam === void 0) { PmemoriaRam = 4; }
        if (PalmacenamientoInterno === void 0) { PalmacenamientoInterno = 64; }
        if (PestadoDeEncendido === void 0) { PestadoDeEncendido = false; }
        this.marca = Pmarca;
        this.modelo = Pmodelo;
        this.sistemaOperativo = PsistemaOperativo;
        this.memoriaRam = PmemoriaRam;
        this.almacenamientoInterno = PalmacenamientoInterno;
        this.estadoDeEncendido = PestadoDeEncendido;
    }
    // Getters
    Phone.prototype.getmarca = function () {
        return this.marca;
    };
    Phone.prototype.getmodelo = function () {
        return this.modelo;
    };
    Phone.prototype.getSistemaOpertaivo = function () {
        return this.sistemaOperativo;
    };
    Phone.prototype.getmemoriaRam = function () {
        return this.memoriaRam;
    };
    Phone.prototype.getalmacenamientoInterno = function () {
        return this.almacenamientoInterno;
    };
    Phone.prototype.getestadoDeEncendido = function () {
        return this.estadoDeEncendido;
    };
    // Setters
    Phone.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Phone.prototype.encenderApagar = function () {
        this.estadoDeEncendido = !this.estadoDeEncendido;
    };
    Phone.prototype.mostrarInfo = function () {
        return "Marca: ".concat(this.marca, "\n    Modelo: ").concat(this.modelo, "\n    Sistema Operativo: ").concat(this.sistemaOperativo, "\n    Memoria RAM: ").concat(this.memoriaRam, "\n    Almacenamiento Interno: ").concat(this.almacenamientoInterno, "\n    Estado de Encendido: ").concat(this.estadoDeEncendido);
    };
    return Phone;
}());
exports.Phone = Phone;
