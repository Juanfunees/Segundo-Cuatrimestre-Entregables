## 🖥️ Construcción de Computadoras – Patrón Builder

### 📋 Descripción

Este proyecto implementa el **patrón de diseño Builder** utilizando **Programación Orientada a Objetos en TypeScript**.  
Permite construir objetos de tipo `Computadora` de forma personalizada, paso a paso.

---

### 🧱 Estructura del Proyecto

#### 🔹 Parte 1 – Clase `Computadora`

Define una computadora con atributos opcionales:

- `procesador: string`
- `ram: string`
- `almacenamiento: string`
- `tarjetaGrafica: string`
- `sistemaOperativo: string`

Incluye un método `mostrarEspecificaciones()` para imprimir sus datos.

---

#### 🔹 Parte 2 – Clase `ComputadoraBuilder`

Permite configurar cada componente de la computadora utilizando una sintaxis fluida:

```ts
new ComputadoraBuilder()
  .setProcesador("Intel Core i9")
  .setRAM("32GB")
  .setAlmacenamiento("1TB SSD")
  .build();
