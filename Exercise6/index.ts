/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera, lagarto, spock.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "🗿" (piedra), "📄" (papel),
 *   "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).
 * - Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".
 * - Debes buscar información sobre cómo se juega con estas 5 posibilidades.
*/

type Play = "🗿" | "📄" | "✂️" | "🦎" | "🖖";

const rules: Record<Play, Play[]> = {
  "🗿": ["✂️", "🦎"],
  "📄": ["🗿", "🖖"],
  "✂️": ["📄", "🦎"],
  "🦎": ["📄", "🖖"],
  "🖖": ["🗿", "✂️"]
}

const determinateWinner = (player1: Play, player2: Play): string => {

  if (player1 === player2) return 'Tie';

  return (rules[player1].includes(player2)) ? "Player 1" : "Player 2";
}

const calculateWinner = (matches: [Play, Play][]): string => {
  let player1Wins: number = 0;
  let player2Wins: number = 0;

  for (let i: number = 0; i < matches.length; i++) {
    const winner = determinateWinner(...matches[i]);

    if (winner === "Player 1") player1Wins++;
    if (winner === "Player 2") player2Wins++;
  }

  if (player1Wins > player2Wins) return "Player 1 Win.";
  if (player2Wins > player1Wins) return "Player 2 Win.";

  return "Tie.";
}

console.log(calculateWinner([["🗿", "✂️"], ["✂️", "🗿"], ["📄", "✂️"]]));
console.log(calculateWinner([["🖖", "🦎"], ["🗿", "✂️"], ["🖖", "🖖"]]));
console.log(calculateWinner([["🦎", "🦎"], ["🖖", "✂️"], ["🖖", "🗿"]]));