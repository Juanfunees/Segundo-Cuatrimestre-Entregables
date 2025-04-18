## 📂 Tercer Entregable 🎓

### Descripción
Se debe modelar un sistema educativo utilizando **Programación Orientada a Objetos (POO)**.

### Requisitos

- **Encapsulamiento**: Todos los atributos deben ser privados y accesibles mediante getters y setters.

- **Clases requeridas**:
  
  #### 📘 `Alumno`
  - **Atributos obligatorios**: nombre, apellido y nota.
  - **Métodos**:
    - `estaAprobado()`: retorna `true` si la nota es mayor o igual a 7, `false` en caso contrario.
    - Getters y setters para acceder y modificar los datos del alumno.

  #### 👨‍🏫 `Profesor`
  - **Atributos obligatorios**: nombre, apellido y un listado de alumnos.
  - **Métodos**:
    - `agregarAlumno(alumno)`: asigna un alumno a su lista.
    - `listarAlumnos()`: muestra todos los alumnos a su cargo.
    - Getters y setters para los datos del profesor.

  #### 🏫 `Escuela`
  - **Atributos**: listado de todos los alumnos y profesores.
  - **Métodos**:
    - `matricularAlumno(alumno)`: agrega un alumno al registro de la escuela.
    - `expulsarAlumno(alumno)`: elimina un alumno del registro.
    - `contratarProfesor(profesor)`: agrega un profesor al plantel.
    - `despedirProfesor(profesor)`: remueve un profesor del plantel.
    - `listaAlumnos()`: muestra todos los alumnos registrados.
    - `listaProfesores()`: muestra todos los profesores contratados.

### Objetivo
Aplicar los conceptos aprendidos hasta el momento:
- Encapsulamiento
- Composición de objetos
- Métodos y clases organizadas
- Interacción entre objetos

