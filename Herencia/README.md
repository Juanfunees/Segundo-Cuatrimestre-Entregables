## Cuarto Entregable

### Descripcion

Este proyecto modela un sistema de electrodomesticos utilizando herencia y composicion en programacion orientada a objetos con TypeScript.
Se implementan tres clases principales: `Electrodomestico`, `Heladera` y `SmartHeladera`, aplicando principios de encapsulamiento, reutilizacion de codigo y separacion de responsabilidades. Tambien se incluye una clase `ModuloWifi` para representar conectividad en dispositivos inteligentes.

---

### Estructura del Proyecto

#### Parte 1 – Herencia

- Clase `Electrodomestico`

  - Atributos:
    - `marca: string`
    - `modelo: string`
    - `estaEncendido: boolean`
  - Metodos:
    - `encender()`: Enciende el dispositivo.
    - `apagar()`: Apaga el dispositivo.
    - `mostrarInfo()`: Muestra los datos basicos del electrodomestico.

- Clase `Heladera` (hereda de `Electrodomestico`)

  - Atributos adicionales:
    - `temperatura: number`
  - Metodos nuevos:
    - `cambiarTemperatura(nuevaTemp: number)`: Cambia la temperatura de la heladera.

- Clase `SmartHeladera` (hereda de `Heladera`)
  - Agrega una composicion con la clase `ModuloWifi`.

---

#### Parte 2 – Composicion

- Clase `ModuloWifi`

  - Atributos:
    - `velocidadMbps: number`
    - `frecuenciaGHz: number`
  - Metodos:
    - Getters y setters para ambos atributos.

- Integracion en `SmartHeladera`
  - Atributo:
    - `moduloWifi: ModuloWifi`
  - Metodos:
    - `conexionInternet()`: Simula una conexion online mostrando la velocidad y frecuencia.
    - Metodos para configurar o recuperar el modulo WiFi.

---

#### Parte 3 – Prueba

- Crear una instancia de `SmartHeladera`.
- Probar sus funcionalidades:
  - Encender la heladera.
  - Cambiar la temperatura.
  - Conectarse a internet.
  - Mostrar toda la informacion.
