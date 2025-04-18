export class Dispositivo {

  protected marcaDispositivo: string;
  protected modeloDispositivo: string;
  protected encendido: boolean;

  constructor(marca: string, modelo: string, estado: boolean) {
      this.marcaDispositivo = marca;
      this.modeloDispositivo = modelo;
      this.encendido = estado;
  }

  public apagarDispositivo() {
      console.log("El dispositivo se ha apagado.");
      this.encendido = false;
  }

  public encenderDispositivo() {
      console.log("El dispositivo esta encendido.");
      this.encendido = true;
  }

  public mostrarDetalles() {
      console.log(`Marca: ${this.marcaDispositivo}`);
      console.log(`Modelo: ${this.modeloDispositivo}`);
      console.log(`Estado: ${this.encendido ? 'Encendido' : 'Apagado'}`);
  }

  public setMarca(marca: string) {
      this.marcaDispositivo = marca;
  }

  public getMarca(): string {
      return this.marcaDispositivo;
  }

  public setEstado(estado: boolean) {
      this.encendido = estado;
  }

  public getEstado(): boolean {
      return this.encendido;
  }

  public setModelo(modelo: string) {
      this.modeloDispositivo = modelo;
  }

  public getModelo(): string {
      return this.modeloDispositivo;
  }
}
