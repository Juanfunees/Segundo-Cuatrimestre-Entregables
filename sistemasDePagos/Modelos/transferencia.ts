import { IPago, MediosDePagos } from "./iPago";

export class Transferencia extends MediosDePagos implements IPago {
  constructor() {
    super(0, "", 0, true, false);
  }

  procesarPago(): void {
    console.log("Procesando pago mediante transferencia bancaria...");
  }

  cancelarPago(): void {
    console.log("Pago por transferencia cancelado.");
  }

  generarRecibo(): void {
    console.log("Recibo generado para transferencia bancaria.");
  }
}
