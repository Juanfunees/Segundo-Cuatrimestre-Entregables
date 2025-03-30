"use strict";
/*

                    SEGUNDO ENTREGABLE

                
Se debe crear una clase Celular que represente un teléfono móvil.

Requisitos:

• Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
Constructor con parámetros opcionales y obligatorios:
• Obligatorios: Marca, modelo y sistema operativo.
• Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).

Métodos adicionales:
    • encenderApagar(): Cambia el estado de encendido/apagado del celular.
    • mostrarInfo(): Retorna una cadena con los datos del celular.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var phone1 = new index_1.Phone("Iphone", "16 Pro", "Ios", 16, 128, false);
var phone2 = new index_1.Phone("Samsung", "Galaxy Z Fold", "Android"); // No le asigno valores entonces toma por default los del constructor
var phone3 = new index_1.Phone();
phone1.encenderApagar();
phone2.encenderApagar();
phone1.mostrarInfo();
phone2.mostrarInfo();
console.log(phone1.getmarca());
console.log(phone1.getmodelo());
console.log(phone1.getsistemaOpertaivo());
console.log(phone1.getmemoriaRam());
console.log(phone1.getalmacenamientoInterno());
console.log(phone1.getestadoDeEncendido());
console.log("------------------------------");
console.log(phone2.getmarca());
console.log(phone2.getmodelo());
console.log(phone2.getsistemaOpertaivo());
console.log(phone2.getmemoriaRam());
console.log(phone2.getalmacenamientoInterno());
console.log(phone2.getestadoDeEncendido());
console.log("------------------------------");
console.log(phone3.getmarca());
console.log(phone3.getmodelo());
console.log(phone3.getsistemaOpertaivo());
console.log(phone3.getmemoriaRam());
console.log(phone3.getalmacenamientoInterno());
console.log(phone3.getestadoDeEncendido());
console.log("------------------------------");
// setter cambiamos xiaomi por iphone
phone3.setMarca("Apple");
console.log(phone3.getmarca());
