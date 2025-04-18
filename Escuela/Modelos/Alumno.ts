export class Alumno {
  private nombre: string;
  private apellido: string;
  private nota: number;

  constructor(nombre: string, apellido: string, nota: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota = nota;
  }

  public setNota(nota: number): void {
    this.nota = nota;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
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

  public getNota(): number {
    return this.nota;
  }

  public estaAprobado(): boolean {
    return this.nota >= 7;
  }
}
