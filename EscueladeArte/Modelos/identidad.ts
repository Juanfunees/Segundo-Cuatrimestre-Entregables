export class Identidad {
  protected nombre: string;
  protected apellido: string;
  protected edad: number;

  constructor(Nombre: string, Apellido: string, Edad: number) {
    this.nombre = Nombre;
    this.apellido = Apellido;
    this.edad = Edad;
  }

  public presentar() {
    console.log(
      `Mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  }

  public getNombre() {
    return this.nombre;
  }

  public getApellido() {
    return this.apellido;
  }

  public getEdad() {
    return this.edad;
  }

  public setNombre(Nombre: string) {
    this.nombre = Nombre;
  }

  public setApellido(Apellido: string) {
    this.apellido = Apellido;
  }

  public setEdad(Edad: number) {
    this.edad = Edad;
  }
}
