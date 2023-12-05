/*
 * Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
 * El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
 * gane cada punto del juego.
 * 
 * - Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
 * - Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:
 *   15 - Love
 *   30 - Love
 *   30 - 15
 *   30 - 30
 *   40 - 30
 *   Deuce
 *   Ventaja P1
 *   Ha ganado el P1
 * - Si quieres, puedes controlar errores en la entrada de datos.   
 * - Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.   
*/

const tennisSimulator = (entries: string[]): string[] => {
  let result: string[] = [];

  const pointsTable: {[key: number]: string} = {
    0: 'Love',
    1: '15',
    2: '30',
    3: '40',
  }

  let p1Points: number = 0;
  let p2Points: number = 0;

  let finished: boolean = false;
  let error: boolean = false;

  for (const player of entries) {
    const playerToUpper: string = player.toUpperCase();
    if(!(['P1', 'P2'].includes(playerToUpper))) {
      error = true;
      break;
    }

    if(playerToUpper === 'P1') p1Points++;
    if(playerToUpper === 'P2') p2Points++;

    let round: string = `${pointsTable[p1Points]} - ${pointsTable[p2Points]}`;

    if(p1Points >= 3 && p1Points === p2Points) round = 'Deuce';

    if(p1Points > 3 && p2Points + 2 === p1Points) {
      round = 'P1 Win';
      finished = true;
    }

    if(p1Points > 3 && p2Points + 1 === p1Points) round = 'Advantage for P1';

    if(p2Points > 3 && p1Points + 2 === p2Points) {
      round = 'P2 Win';
      finished = true;
    }

    if(p2Points > 3 && p1Points + 1 === p2Points) round = 'Advantage for P2';

    result.push(round);

   if(finished) break;
  }

  if(error) {
    console.log('Please only enter "P1" or "P2".');
    result = [];
  }

  return result;
}

console.log(tennisSimulator(['P1', 'P1', 'P1', 'P2', 'P2', 'P2', 'P2', 'P1', 'P1', 'P2', 'P1', 'P1', 'P1', 'P1']));
