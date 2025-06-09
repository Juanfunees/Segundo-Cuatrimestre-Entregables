import { Animal } from "./animal";

export class Pajaro implements Animal {
  hacerSonido(): void {
    console.log("🐦 El pajaro dice: Pio pio!");
  }

  mover(): void {
    console.log("🐦 El pajaro vuela por el cielo.");
  }
}
