import { Animal } from "./animal";
import { Perro } from "./perro";
import { Gato } from "./gato";
import { Pajaro } from "./pajaro";

export class AnimalFactory {
  static crearAnimal(tipo: string): Animal | null {
    switch (tipo.toLowerCase()) {
      case "perro":
        return new Perro();
      case "gato":
        return new Gato();
      case "pajaro":
        return new Pajaro();
      default:
        console.log("⚠️ Tipo de animal no reconocido.");
        return null;
    }
  }
}
