import { Escuela } from "./Modelos/Escuela";
import { Profesor } from "./Modelos/Profesor";
import { Alumno } from "./Modelos/Alumno";

const escuela = new Escuela();

const alumno1 = new Alumno("Juan", "Funes", 8);
const alumno2 = new Alumno("Brenda", "Martinez", 10);

const profesor1 = new Profesor("Valentina", "Scheider");
const profesor2 = new Profesor("Fabricio", "Lopez");
const profesor3 = new Profesor("Ramiro", "Ricardes");

if (alumno1.estaAprobado()) {
  console.log(`\n${alumno1.getNombreCompleto()} esta aprobado.`);
} else {
  console.log(`\n${alumno1.getNombreCompleto()} no esta aprobado.`);
}

profesor1.agregarAlumno(alumno1);
profesor3.agregarAlumno(alumno2);

profesor1.listarAlumnos();
profesor3.listarAlumnos();

escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);

escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);
escuela.despedirProfesor(profesor1);
escuela.contratarProfesor(profesor3);

escuela.listaAlumnos();
escuela.listaProfesores();
