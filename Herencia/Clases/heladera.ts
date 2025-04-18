import { Dispositivo } from "./electrodomestico";

export class Refrigerador extends Dispositivo {

    private grados: number;

    constructor(marca: string, modelo: string, estado: boolean, temperatura: number) {
        super(marca, modelo, estado);
        this.grados = temperatura;
    }

    public ajustarTemperatura(nuevaTemperatura: number) {
        this.grados = nuevaTemperatura;
        console.log(`Temperatura ajustada a ${this.grados}°C`);
    }

    public setTemperatura(nuevaTemperatura: number) {
        this.grados = nuevaTemperatura;
    }

    public getTemperatura(): number {
        return this.grados;
    }
}
