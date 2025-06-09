import { AnimalFactory } from "./modelos/animalFactory";

const animalesDeseados = ["perro", "gato", "pajaro", "pez"]; // "pez" para probar el error

for (const tipo of animalesDeseados) {
  const animal = AnimalFactory.crearAnimal(tipo);
  if (animal) {
    animal.hacerSonido();
    animal.mover();
    console.log("---------");
  }
}
