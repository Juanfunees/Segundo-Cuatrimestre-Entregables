export class Phone {
  private marca: string;
  private modelo: string;
  private sistemaOperativo: string;
  private memoriaRam: number;
  private almacenamientoInterno: number;
  private estadoDeEncendido: boolean;

  constructor(
    Pmarca: string = "Xiaomi",
    Pmodelo: string = "Redmi Note",
    PsistemaOperativo: string = "Android",
    PmemoriaRam: number = 4,
    PalmacenamientoInterno: number = 64,
    PestadoDeEncendido: boolean = false
  ) {
    this.marca = Pmarca;
    this.modelo = Pmodelo;
    this.sistemaOperativo = PsistemaOperativo;
    this.memoriaRam = PmemoriaRam;
    this.almacenamientoInterno = PalmacenamientoInterno;
    this.estadoDeEncendido = PestadoDeEncendido;
  }

  // Getters

  public getmarca(): string {
    return this.marca;
  }
  public getmodelo(): string {
    return this.modelo;
  }
  public getsistemaOpertaivo(): string {
    return this.sistemaOperativo;
  }
  public getmemoriaRam(): number {
    return this.memoriaRam;
  }
  public getalmacenamientoInterno(): number {
    return this.almacenamientoInterno;
  }
  public getestadoDeEncendido(): boolean {
    return this.estadoDeEncendido;
  }

  // Setters

  public setMarca(nuevaMarca: string): void {
    this.marca = nuevaMarca;
  }

  public encenderApagar(): void {
    this.estadoDeEncendido = !this.estadoDeEncendido;
  }

  public mostrarInfo() {
    return `Marca: ${this.marca}
    Modelo: ${this.modelo}
    Sistema Operativo: ${this.sistemaOperativo}
    Memoria RAM: ${this.memoriaRam}
    Almacenamiento Interno: ${this.almacenamientoInterno}
    Estado de Encendido: ${this.estadoDeEncendido}`;
  }
}
