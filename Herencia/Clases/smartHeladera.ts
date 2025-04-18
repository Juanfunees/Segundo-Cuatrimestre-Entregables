import { Refrigerador } from "./heladera";
import { ConexionWifi } from "./moduloWifi";

export class HeladeraInteligente extends Refrigerador {

    private wifi: ConexionWifi;

    constructor(marca: string, modelo: string, estado: boolean, temperatura: number, velocidad: number, frecuencia: number) {
        super(marca, modelo, estado, temperatura);
        this.wifi = new ConexionWifi(velocidad, frecuencia);
    }

    public conectarRed() {
        if (this.getEstado()) {
            console.log(`Conectando a la red con una velocidad de ${this.wifi.getVelocidad()} Mbps...`);
            console.log(`Conexion establecida a ${this.wifi.getFrecuencia()} GHz`);
        } else {
            console.log("No se puede conectar, verifique que el dispositivo este encendido.");
        }
    }

    public mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`Temperatura: ${this.getTemperatura()}°C`);
    }
}
