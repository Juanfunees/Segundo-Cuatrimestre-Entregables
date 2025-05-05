## 📂 Sistema de Medios de Pago

### 📋 Descripción

Este proyecto modela un sistema de medios de pago utilizando **Programación Orientada a Objetos en TypeScript**.  
Permite procesar pagos mediante distintos métodos como tarjetas de crédito, transferencias bancarias y Mercado Pago.

---

### 🧱 Estructura del Proyecto

#### 🔹 Parte 1 – Interfaz

- **Interfaz `IPago`**  
  Define el contrato que deben implementar todos los métodos de pago.

  **Métodos:**
  - `procesarPago(): void`: Ejecuta el proceso de cobro.
  - `cancelarPago(): void`: Cancela una transacción.
  - `generarRecibo(): void`: Emite un comprobante del pago.

---

#### 🔹 Parte 2 – Clase Base

- **Clase `MediosDePagos`**  
  Clase base con atributos y métodos comunes a todos los métodos de pago.

  **Atributos:**
  - `numeroDeTarjeta: number`
  - `entidad: string`
  - `cuotas: number`
  - `esTransferencia: boolean`
  - `esMercadoPago: boolean`

  **Métodos:**
  - Getters y setters para todos los atributos.
  - Métodos auxiliares como `solicitarNumeroDeTarjeta()`, `solicitarEntidad()`, etc.

---

#### 🔹 Parte 3 – Subclases

- **Clase `TarjetaDeCredito`** (extiende `MediosDePagos` e implementa `IPago`)  
  Simula un pago con tarjeta.

  - `procesarPago()`: Muestra datos de la tarjeta y cuotas.
  - `cancelarPago()`: Cancela el pago con tarjeta.
  - `generarRecibo()`: Muestra un recibo con número de tarjeta y entidad.

- **Clase `Transferencia`** (extiende `MediosDePagos` e implementa `IPago`)  
  Simula un pago por transferencia bancaria.

  - `procesarPago()`: Procesa la transferencia.
  - `cancelarPago()`: Cancela la transferencia.
  - `generarRecibo()`: Muestra un recibo bancario.

- **Clase `MercadoPago`** (extiende `MediosDePagos` e implementa `IPago`)  
  Simula un pago por Mercado Pago.

  - `procesarPago()`: Inicia el cobro con MP.
  - `cancelarPago()`: Cancela el pago.
  - `generarRecibo()`: Emite un comprobante digital.
