import { Computadora } from "./computadora";

export class ComputadoraBuilder {
  private procesador?: string;
  private ram?: string;
  private almacenamiento?: string;
  private tarjetaGrafica?: string;
  private sistemaOperativo?: string;

  setProcesador(procesador: string): ComputadoraBuilder {
    this.procesador = procesador;
    return this;
  }

  setRAM(ram: string): ComputadoraBuilder {
    this.ram = ram;
    return this;
  }

  setAlmacenamiento(almacenamiento: string): ComputadoraBuilder {
    this.almacenamiento = almacenamiento;
    return this;
  }

  setTarjetaGrafica(tarjeta: string): ComputadoraBuilder {
    this.tarjetaGrafica = tarjeta;
    return this;
  }

  setSistemaOperativo(sistema: string): ComputadoraBuilder {
    this.sistemaOperativo = sistema;
    return this;
  }

  build(): Computadora {
    return new Computadora(
      this.procesador,
      this.ram,
      this.almacenamiento,
      this.tarjetaGrafica,
      this.sistemaOperativo
    );
  }
}
