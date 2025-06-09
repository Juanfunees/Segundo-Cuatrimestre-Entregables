## 🐶🐱🐦 Fábrica de Animales – Patrón Factory

### 📋 Descripción

Este proyecto aplica el **patrón de diseño Factory** usando **Programación Orientada a Objetos en TypeScript**.  
Permite crear instancias de animales como `Perro`, `Gato` y `Pájaro` mediante una fábrica central.

---

### 🧱 Estructura del Proyecto

#### 🔹 Parte 1 – Interfaz `Animal`

Define el contrato común para todos los animales:

- `hacerSonido(): void`
- `mover(): void`

---

#### 🔹 Parte 2 – Clases Concretas

- **`Perro`**: ladra y corre.
- **`Gato`**: maúlla y se desliza.
- **`Pajaro`**: pía y vuela.

Cada clase implementa la interfaz `Animal`.

---

#### 🔹 Parte 3 – Clase `AnimalFactory`

Contiene un método estático que decide qué tipo de animal crear según un parámetro de entrada:

```ts
static crearAnimal(tipo: string): Animal | null {
  switch (tipo.toLowerCase()) {
    case "perro":
      return new Perro();
    case "gato":
      return new Gato();
    case "pajaro":
      return new Pajaro();
    default:
      return null;
  }
}
