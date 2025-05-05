import { IPago, MediosDePagos } from "./iPago";

export class MercadoPago extends MediosDePagos implements IPago {
  constructor() {
    super(0, "", 0, false, true);
  }

  procesarPago(): void {
    console.log("Procesando pago a traves de Mercado Pago...");
  }

  cancelarPago(): void {
    console.log("Pago con Mercado Pago cancelado.");
  }

  generarRecibo(): void {
    console.log("Recibo generado por Mercado Pago.");
  }
}
