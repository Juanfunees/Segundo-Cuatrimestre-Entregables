## 📂 Sistema de Gestión de Animales

### 📋 Descripción

Este proyecto modela un sistema de gestión de animales utilizando **Programación Orientada a Objetos en TypeScript**
Se definen estructuras que representan distintos animales, sus comportamientos y características comunes
---

### 🧱 Estructura del Proyecto

#### 🔹 Parte 1 – Interfaz

- **Interfaz `IAnimal`**  
  Define el contrato que deben seguir todos los animales del sistema.

  **Métodos:**
  - `emitirSonido(): void`: Simula el sonido tipico del animal.
  - `moverse(): void`: Simula cómo se mueve el animal.

---

#### 🔹 Parte 2 – Clase Abstracta

- **Clase abstracta `Animal`** (implementa `IAnimal`)

  **Atributos:**
  - `nombre: string`: Nombre del animal.

  **Métodos:**
  - `constructor(nombre: string)`: Inicializa el nombre.
  - `moverse()`: Implementación base que muestra: `${this.nombre} se esta moviendo`
  - `tipoDeDieta()`: Metodo abstracto que las subclases deben implementar según su dieta.

---

#### 🔹 Parte 3 – Subclases

- **Clase `Perro`** (extiende `Animal`)
  - `emitirSonido()`: Muestra `"Guau,Guau!"`
  - `tipoDeDieta()`: Muestra una descripción de la dieta del perro.

- **Clase `Gato`** (extiende `Animal`)
  - `emitirSonido()`: Muestra `"Miau,Miau!"`
  - `tipoDeDieta()`: Muestra una descripción de la dieta del gato.

---

#### 🔹 Parte 4 – Prueba

- Se crean instancias de las clases `Perro` y `Gato`.
- Se prueban sus métodos:
  - `emitirSonido()`
  - `moverse()`
  - `tipoDeDieta()`

