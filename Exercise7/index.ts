/*
 * Crea un generador de números pseudoaleatorios entre 0 y 100.
 * - No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.
 *
 * Es más complicado de lo que parece...
*/

// x0=semilla; a=multiplicador; b=incremento; m=módulo; n=longitud deseada de el arreglo;
const generatedRandomNumber = (x0: number = 2, a: number = 41, b: number = 24, m: number = 57, n: number = 100): number[] => {
  const results: number[] = [];

  for (let i: number = 0; i < n; i++) {
    x0 = (a * x0 + b) % m;
    results.push(x0);
  }
  return results;
}

console.log(generatedRandomNumber());