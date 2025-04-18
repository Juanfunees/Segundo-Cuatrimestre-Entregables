import { Profesor } from "./Profesor";
import { Alumno } from "./Alumno";

export class Escuela {
  private profesores: Profesor[];
  private alumnos: Alumno[];

  constructor() {
    this.profesores = [];
    this.alumnos = [];
  }

  matricularAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  contratarProfesor(profesor: Profesor): void {
    this.profesores.push(profesor);
  }

  expulsarAlumno(alumno: Alumno): void {
    this.alumnos = this.alumnos.filter((a) => a !== alumno);
  }

  despedirProfesor(profesor: Profesor): void {
    this.profesores = this.profesores.filter((p) => p !== profesor);
  }

  listaAlumnos(): void {
    console.log("\nListado de Alumnos:");
    if (this.alumnos.length === 0) {
      console.log("No hay alumnos matriculados.");
    } else {
      this.alumnos.forEach((alumno) => {
        console.log(
          `\n${alumno.getNombreCompleto()} - Nota: ${alumno.getNota()}`
        );
      });
    }
  }

  listaProfesores(): void {
    console.log("\nLista de Profesores:");
    if (this.profesores.length === 0) {
      console.log("\nNo hay profesores contratados.");
    } else {
      this.profesores.forEach((profesor) => {
        console.log(`\n${profesor.getNombreCompleto()}`);
      });
    }
  }
}
