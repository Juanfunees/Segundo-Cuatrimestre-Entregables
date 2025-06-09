import { ComputadoraBuilder } from "./Modelos/computadoraBuilder";

const miPC = new ComputadoraBuilder()
  .setProcesador("Intel Core i9")
  .setRAM("32GB")
  .setAlmacenamiento("1TB SSD")
  .setTarjetaGrafica("NVIDIA RTX 3080")
  .setSistemaOperativo("Windows 11")
  .build();

miPC.mostrarEspecificaciones();
