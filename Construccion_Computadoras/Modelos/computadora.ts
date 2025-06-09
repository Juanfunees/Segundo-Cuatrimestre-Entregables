export class Computadora {
  procesador?: string;
  ram?: string;
  almacenamiento?: string;
  tarjetaGrafica?: string;
  sistemaOperativo?: string;

  constructor(
    procesador?: string,
    ram?: string,
    almacenamiento?: string,
    tarjetaGrafica?: string,
    sistemaOperativo?: string
  ) {
    this.procesador = procesador;
    this.ram = ram;
    this.almacenamiento = almacenamiento;
    this.tarjetaGrafica = tarjetaGrafica;
    this.sistemaOperativo = sistemaOperativo;
  }

  mostrarEspecificaciones(): void {
    console.log("🖥️ Especificaciones de la Computadora:");
    console.log(`Procesador: ${this.procesador ?? "No especificado"}`);
    console.log(`RAM: ${this.ram ?? "No especificado"}`);
    console.log(`Almacenamiento: ${this.almacenamiento ?? "No especificado"}`);
    console.log(`Tarjeta Grafica: ${this.tarjetaGrafica ?? "No especificado"}`);
    console.log(`Sistema Operativo: ${this.sistemaOperativo ?? "No especificado"}`);
  }
}
