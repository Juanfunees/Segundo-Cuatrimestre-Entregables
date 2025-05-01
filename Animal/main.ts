import { Gato } from "./Modelos/Gato";
import { Perro } from "./Modelos/Perro";

const miGato = new Gato("Floki");
const miPerro = new Perro("Ragnar");

console.log("Floki:");
miGato.emitirSonido();
miGato.moverse();
miGato.tipoDeDieta();

console.log("\nRagnar:");
miPerro.emitirSonido();
miPerro.moverse();
miPerro.tipoDeDieta();
