import { Identidad } from "./persona";

export class ProfesorArte extends Identidad {
  protected especialidad: string;

  constructor(
    Nombre: string,
    Apellido: string,
    Edad: number,
    Especialidad: string
  ) {
    super(Nombre, Apellido, Edad);
    this.especialidad = Especialidad;
  }

  public presentar(): void {
    console.log(
      `Mi nombre es ${this.getNombre()} ${this.getApellido()}, soy profesor y tengo ${this.getEdad()} años. Me especializo en ${
        this.especialidad
      }.`
    );
  }

  public setEspecialidad(Especialidad: string) {
    this.especialidad = Especialidad;
  }

  public getEspecialidad() {
    return this.especialidad;
  }
}
