/*
 * Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
*/

const isEven = (number: number): boolean => {
  return number % 2 === 0;
}

const isPerfectSquare = (number: number): boolean => {
  const sqrt = Math.sqrt(number);
    return Number.isInteger(sqrt);
}

const isFibonacci = (number: number): boolean => {
  if(number < 0) return false;

  return (isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4));
}

const isPrime = (number: number): boolean => {
  if(number <= 1) return false;
  
  const squareRoot = Math.sqrt(number);

  for(let i: number = 2; i <= squareRoot; i++) {
    if(number % i === 0) {
      return false;
    }
  }

  return true;
}

const analyzeNumber = (number: number): void => {
  let result: string = `${number}`;

  result += isPrime(number) ? ' is prime,' : " isn't prime,";

  result += isFibonacci(number) ? ' is fibonacci' : " isn't fibonacci";

  result += isEven(number) ? ' and is even.' : " and isn't even.";

  console.log(result);
}

analyzeNumber(2);
analyzeNumber(5);
analyzeNumber(7);
analyzeNumber(9);
analyzeNumber(16);
analyzeNumber(34);