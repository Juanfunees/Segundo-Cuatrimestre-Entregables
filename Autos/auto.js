"use strict";
/*
                    PRIMER ENTREGABLE

 Crear una clase Auto con atributos (marca, modelo, anio).
 Agregar métodos (constructor(), acelerar(), frenar()).
 Instanciar objetos y probar métodos.
 
 */
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var car1 = new main_1.auto("Ford", "Focus", 2018);
var car2 = new main_1.auto("Volkswagen", "Vento", 2020);
var car3 = new main_1.auto("Ford", "Mondeo", 2024);
var car4 = new main_1.auto("Chevrolet", "Cruze", 2015);
car1.acelerar();
car1.frenar();
car2.acelerar();
car2.frenar();
car3.acelerar();
car3.frenar();
car4.acelerar();
car4.frenar();
