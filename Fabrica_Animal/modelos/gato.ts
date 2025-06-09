import { Animal } from "./animal";

export class Gato implements Animal {
  hacerSonido(): void {
    console.log("🐱 El gato dice: Miau!");
  }

  mover(): void {
    console.log("🐱 El gato se desliza con elegancia.");
  }
}
