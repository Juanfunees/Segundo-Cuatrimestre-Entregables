import { ProfesorArte } from "./profesorArte";
import { AlumnoArte } from "./alumno";

export class CursoDeArte {
  public nombreCurso: string;
  private responsable: ProfesorArte;
  private alumnos: AlumnoArte[];

  constructor(nombreCurso: string, responsable: ProfesorArte) {
    this.nombreCurso = nombreCurso;
    this.responsable = responsable;
    this.alumnos = [];
  }

  public agregarAlumno(alumno: AlumnoArte): void {
    this.alumnos.push(alumno);
  }

  public mostrarInfoGeneral(): void {
    console.log(`Curso: ${this.nombreCurso}`);
    console.log(
      `Responsable: ${this.responsable.getNombre()} ${this.responsable.getApellido()}`
    );
    console.log(`Cantidad de alumnos: ${this.alumnos.length}\n`);
  }

  public listarAlumnos(): void {
    this.alumnos.forEach((alumno) => {
      console.log(alumno.getNombre());
    });
  }

  public getResponsable(): ProfesorArte {
    return this.responsable;
  }

  public getAlumnos(): AlumnoArte[] {
    return this.alumnos;
  }
}
