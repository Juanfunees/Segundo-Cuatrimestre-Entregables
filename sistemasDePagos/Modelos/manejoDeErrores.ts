//Manejo de errores con try catch y throw
function sumarValores(valores: number[]): number {
    if (valores.length == 0)
        throw new Error('No se pueden sumar los valores de un arreglo vacío')
   
    let sumaTotal = 0;
 
    for (let i = 0; i < valores.length; i++)
        sumaTotal += valores[i];
 
    return sumaTotal;
 }
 let valores : number[] = [2, 3 , 4];
 
//  try {
//  console.log(sumarValores(valores));
//  } catch(error) {
//     console.error((error as Error).message);
//  }
 
 
function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}
// try {
//     const resultado = dividir(10, 2);
//     console.log("Resultado:", resultado);
// } catch (error) {
//     console.error("Error:", (error as Error).message);
// }
// //-------------------------------------------------------------------
function obtenerNombre(usuario: { nombre?: string }): string {
    if (!usuario.nombre) {
        throw new Error("El usuario no tiene nombre definido");
    }
    return usuario.nombre;
}
// try {
//     const usuario = {nombre: "Juan"};
//     console.log(obtenerNombre(usuario));
// } catch (error) {
//     console.error("Error:", (error as Error).message);
// }
// //---------------------------------------------------------------------
function convertirANumero(cadena: string): number {
    const numero = Number(cadena);
    if (isNaN(numero)) {
        throw new Error("La cadena no es un número válido");
    }
    return numero;
}
try {
    const numero = convertirANumero("54");
    console.log("Número convertido:", numero);
} catch (error) {
    console.error("Error:", (error as Error).message);
}





