import { Animal } from "./Animal";

export class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    emitirSonido(): void {
        console.log("Guau,Guau!");
    }

    tipoDeDieta(): void {
        console.log("A Ragnar le gusta la Carne con hueso!.");
    }
}
