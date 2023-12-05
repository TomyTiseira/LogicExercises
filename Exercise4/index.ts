/*
 * Escribe un programa que sea capaz de generar contraseñas de forma aleatoria.
 * Podrás configurar generar contraseñas con los siguientes parámetros:
 * - Longitud: Entre 8 y 16.
 * - Con o sin letras mayúsculas.
 * - Con o sin números.
 * - Con o sin símbolos.
 * (Pudiendo combinar todos estos parámetros entre ellos)
*/

const generedRandomPassword = (length: number, upper: boolean = false, numbers: boolean = false, symbols: boolean = false): string => {
  if(length < 8 || length > 16) {
    console.log(`Invalid length: ${length}. Please enter a length beteween 8 and 16.`);
    return '';
  }

  let characters: string = 'abcdefghijklmnopqrstuvwxyz';

  if(upper) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if(numbers) characters += '1234567890';
  if(symbols) characters += '!@#$%^&*()-_+=<>?';

  let password: string = '';
 
  for (let i: number = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

console.log(generedRandomPassword(12, true, true, true));