export class auto {
  marca: string;
  modelo: string;
  anio: number;

  constructor(pMarca: string, pModelo: string, pAnio: number) {
    this.marca = pMarca;
    this.modelo = pModelo;
    this.anio = pAnio;
  }

  acelerar(): void {
    console.log(
      `El ${this.marca} ${this.modelo} del año ${this.anio} se encuentra acelerando.`
    );
  }

  frenar(): void {
    console.log(
      `El ${this.marca} ${this.modelo} del año ${this.anio} esta frenando.`
    );
  }
}
