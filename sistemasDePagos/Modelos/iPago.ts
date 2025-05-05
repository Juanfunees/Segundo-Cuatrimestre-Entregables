export interface IPago {
  procesarPago(): void;
  cancelarPago(): void;
  generarRecibo(): void;
}

export class MediosDePagos {
  constructor(
    private numeroDeTarjeta: number,
    private entidad: string,
    private cuotas: number,
    private esTransferencia: boolean,
    private esMercadoPago: boolean
  ) {}

  public getNumeroDeTarjeta(): number {
    return this.numeroDeTarjeta;
  }

  public setNumeroDeTarjeta(numero: number): void {
    this.numeroDeTarjeta = numero;
  }

  public getEntidad(): string {
    return this.entidad;
  }

  public setEntidad(entidad: string): void {
    this.entidad = entidad;
  }

  public getCuotas(): number {
    return this.cuotas;
  }

  public setCuotas(cuotas: number): void {
    this.cuotas = cuotas;
  }

  public esTransferenciaBancaria(): boolean {
    return this.esTransferencia;
  }

  public esPagoPorMercadoPago(): boolean {
    return this.esMercadoPago;
  }

  public solicitarNumeroDeTarjeta(): void {
    const readlineSync = require("readline-sync");
    const numero = readlineSync.questionInt("Ingrese numero de tarjeta: ");
    this.setNumeroDeTarjeta(numero);
  }

  public solicitarEntidad(): void {
    const readlineSync = require("readline-sync");
    const entidad = readlineSync.question("Ingrese entidad emisora: ");
    this.setEntidad(entidad);
  }

  public solicitarCuotas(): void {
    const readlineSync = require("readline-sync");
    const cuotas = readlineSync.questionInt("Ingrese cantidad de cuotas: ");
    this.setCuotas(cuotas);
  }

  public confirmarUsoDeTransferencia(): void {
    console.log("Usted ha elegido pagar por transferencia bancaria.");
  }

  public confirmarUsoDeMercadoPago(): void {
    console.log("Usted ha elegido pagar por Mercado Pago.");
  }
}
