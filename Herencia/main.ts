import { HeladeraInteligente } from "./Clases/smartHeladera";

const heladeraNueva = new HeladeraInteligente("LG", "FreshCool 3000", true, 4, 150, 5.8);

console.log("\nATENCION‼️‼️ La heladera esta cobrando vida! 🔥: " );
console.log("\n");

heladeraNueva.encenderDispositivo();
heladeraNueva.mostrarDetalles();

console.log("\nAjustando temperatura:");
heladeraNueva.ajustarTemperatura(2);

console.log("\nConectando a la red:");
heladeraNueva.conectarRed();

console.log("\nVerificando estado y detalles:");
heladeraNueva.mostrarDetalles();

console.log("\nProbando getters y setters:");
console.log(heladeraNueva.getEstado());
console.log(heladeraNueva.getTemperatura());
heladeraNueva.setMarca("Samsung");
heladeraNueva.setModelo("RT32K5930SL/B3");
heladeraNueva.apagarDispositivo(); 
heladeraNueva.conectarRed();
heladeraNueva.setTemperatura(8); 
heladeraNueva.mostrarDetalles();