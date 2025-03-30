import { Phone } from "./index";

let phone1 = new Phone("Iphone", "16 Pro", "Ios", 16, 128, false);
let phone2 = new Phone("Samsung", "Galaxy Z Fold", "Android"); // No le asigno valores entonces toma por default los del constructor
let phone3 = new Phone();

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
