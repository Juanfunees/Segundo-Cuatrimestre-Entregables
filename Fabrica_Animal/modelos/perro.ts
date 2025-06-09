import { Animal } from "./animal";

export class Perro implements Animal {
  hacerSonido(): void {
    console.log("🐶 El perro dice: Guau guau!");
  }

  mover(): void {
    console.log("🐶 El perro corre felizmente.");
  }
}
