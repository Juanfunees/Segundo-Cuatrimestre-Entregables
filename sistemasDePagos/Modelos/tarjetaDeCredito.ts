import { IPago, MediosDePagos } from "./iPago";

export class TarjetaDeCredito extends MediosDePagos implements IPago {
  constructor() {
    super(0, "", 0, false, false);
  }

  procesarPago(): void {
    console.log(
      `Procesando pago con tarjeta ${this.getEntidad()} en ${this.getCuotas()} cuotas...`
    );
  }

  cancelarPago(): void {
    console.log("Pago con tarjeta de credito cancelado.");
  }

  generarRecibo(): void {
    console.log(
      `Recibo generado para tarjeta ${this.getEntidad()} (${this.getNumeroDeTarjeta()})`
    );
  }
}
