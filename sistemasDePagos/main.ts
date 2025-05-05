import * as rls from "readline-sync";
import { TarjetaDeCredito } from "./Modelos/tarjetaDeCredito";
import { Transferencia } from "./Modelos/transferencia";
import { MercadoPago } from "./Modelos/mercadoPago";

function mostrarMenu(): number {
  console.log("\nSeleccione método de pago:");
  console.log("1. Tarjeta de Crédito");
  console.log("2. Transferencia Bancaria");
  console.log("3. Mercado Pago");
  return rls.questionInt("Opción: ");
}

function ejecutarPago(opcion: number): void {
  let metodoPago;

  switch (opcion) {
    case 1:
      metodoPago = new TarjetaDeCredito();
      metodoPago.solicitarEntidad();
      metodoPago.solicitarNumeroDeTarjeta();
      metodoPago.solicitarCuotas();
      break;
    case 2:
      metodoPago = new Transferencia();
      metodoPago.confirmarUsoDeTransferencia();
      break;
    case 3:
      metodoPago = new MercadoPago();
      metodoPago.confirmarUsoDeMercadoPago();
      break;
    default:
      console.log("Opción inválida.");
      return;
  }

  metodoPago.procesarPago();
  metodoPago.generarRecibo();
  metodoPago.cancelarPago();
}

const opcion = mostrarMenu();
ejecutarPago(opcion);
