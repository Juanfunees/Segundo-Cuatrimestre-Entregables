import { Animal } from "./Animal";

export class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    emitirSonido(): void {
        console.log("Miau,Miau!");
    }

    tipoDeDieta(): void {
        console.log("A Floki le gusta el Pollito!");
    }
}
