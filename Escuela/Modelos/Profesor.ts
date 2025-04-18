import { Alumno } from "./Alumno";

export class Profesor {
  private nombre: string;
  private apellido: string;
  private alumnos: Alumno[];

  constructor(nombre: string, apellido: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.alumnos = [];
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public getNombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  public agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  public listarAlumnos(): void {
    console.log(`\nAlumnos del profesor/a ${this.getNombreCompleto()}:`);
    if (this.alumnos.length === 0) {
      console.log("No tiene alumnos asignados.");
    } else {
      this.alumnos.forEach((alumno) => {
        console.log(
          `\n${alumno.getNombreCompleto()} - Nota: ${alumno.getNota()}`
        );
      });
    }
  }
}
