# 🎨 Quinto Entregable – Escuela de Arte

## 📘 Descripción

Este proyecto modela un sistema para una **prestigiosa escuela de arte** utilizando **Programación Orientada a Objetos en TypeScript**.  
El sistema organiza a las personas que forman parte de la comunidad educativa: quienes enseñan (**profesores**) y quienes aprenden (**alumnos**), así como los distintos **cursos** ofrecidos.

Se aplican los principios de:
- ✅ Encapsulamiento
- ✅ Herencia
- ✅ Polimorfismo
- ✅ Composición
- ✅ Separación de responsabilidades

> 💡 **Integrantes del proyecto:**
> 👨🏽‍🦱- Juan Cruz Funes
> 🧑🏽- Juan Ignacio Bayugar

---

## 🧱 Estructura del Proyecto

### 🔹 `Identidad` (Clase base)
Representa una persona en la escuela.  
**Atributos:** `nombre`, `apellido`, `edad`  
**Métodos:** `presentar()`, getters y setters

### 🔹 `AlumnoArte` (Extiende `Identidad`)
Agrega un atributo `nivel` para indicar el grado artístico.  
**Métodos:** `presentar()` personalizado, getters y setters

### 🔹 `ProfesorArte` (Extiende `Identidad`)
Agrega un atributo `especialidad` para detallar el campo artístico.  
**Métodos:** `presentar()` personalizado, getters y setters

### 🔹 `CursoDeArte`
Representa un curso de la escuela.  
**Atributos:** `nombreCurso`, `descripcion`, `responsable (ProfesorArte)`, `alumnos (AlumnoArte[])`  
**Métodos:**
- `agregarAlumno()`
- `mostrarInfoGeneral()`
- `listarAlumnos()`

### 🔹 `EscuelaDeArte`
Contiene todos los cursos ofrecidos.  
**Atributos:** `cursos (CursoDeArte[])`  
**Métodos:**
- `agregarCurso()`
- `mostrarCursosDisponibles()`
- `listarAlumnosDeCurso(nombreCurso)`

---

## 🧪 Ejecución y Pruebas (`main.ts`)

El archivo principal realiza las siguientes acciones:

- Crea instancias de profesores y alumnos.
- Crea cursos y asigna responsables.
- Inscribe alumnos en sus respectivos cursos.
- Agrega los cursos a la escuela.
- Presenta a todos los profesores y alumnos.
- Lista los cursos disponibles.
- Muestra qué alumnos están en cada curso.

---

> “El arte no reproduce lo visible. Lo hace visible.” – Paul Klee