import { Identidad } from "./persona";

export class AlumnoArte extends Identidad {
  protected nivel: number;

  constructor(Nombre: string, Apellido: string, Edad: number, Nivel: number) {
    super(Nombre, Apellido, Edad);
    this.nivel = Nivel;
  }

  public presentar(): void {
    console.log(
      `Mi nombre es ${this.getNombre()} ${this.getApellido()}, soy alumno y tengo ${this.getEdad()} años. Actualmente tengo un nivel de ${
        this.nivel
      }.`
    );
  }
  
  public setNivel(Nivel: number) {
    this.nivel = Nivel;
  }

  public getNivel() {
    return this.nivel;
  }
}
