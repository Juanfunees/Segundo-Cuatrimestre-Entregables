export class ConexionWifi {
  private velocidadRed: number;
  private frecuenciaRed: number;

  constructor(velocidad: number = 100, frecuencia: number = 2.4) {
      this.velocidadRed = velocidad;
      this.frecuenciaRed = frecuencia;
  }

  public setVelocidad(velocidad: number) {
      this.velocidadRed = velocidad;
  }

  public getVelocidad(): number {
      return this.velocidadRed;
  }

  public setFrecuencia(frecuencia: number) {
      this.frecuenciaRed = frecuencia;
  }

  public getFrecuencia(): number {
      return this.frecuenciaRed;
  }
}
