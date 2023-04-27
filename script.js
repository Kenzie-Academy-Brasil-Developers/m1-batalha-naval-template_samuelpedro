// Tabuleiro inicial de exemplo
const seaBoard = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];

/*
  Desenvolva seu código logo abaixo
*/

function allocateShips(shipPositions, initialBoard) {
  for (let i = 0; i < shipPositions.length; i++) {
    const position = shipPositions[i];
    const row = position[0];
    const pillar = position[1];
    initialBoard[row][pillar] = "S";
  }
  return initialBoard;
}

// esta função esta percorrendo todas as posições de navios

// e alterando o valor correspondente no tabuleiro para "S"

// e no final estou retornando o tabuleiro "arrays de arrays" modificado

function checkGuesses(guesses, mountedBoard) {
  for (let i = 0; i < guesses.length; i++) {
    const row = guesses[i][0];
    const pillar = guesses[i][1];
    if (mountedBoard[row][pillar] === "S") {
      mountedBoard[row][pillar] = "X";
    }
  }
  return mountedBoard;
}

//esta função esta verificando as posições do jogador em relação à posição dos navios do adversário

// logo em seguida minha função esta percorrendo todas as suposições e, se uma suposição acertar a posição de um navio, deve alterar o valor correspondente no tabuleiro do adversário para "X"

// e no final estou retornando o tabuleiro "arrays de arrays" modificado após as suposições de onde estão os navios


function checkWinCondition (guessedBoard){
  for (let i = 0; i < guessedBoard.length; i++){
    for(let index = 0; index < guessedBoard[i].length; index++){
      if (guessedBoard[i][index] === "S") {
        return false;
      }
    }
  }
  return true;
}

// esta função esta verificando se o jogador venceu a partida

//esta função esta percorrendo todo o meu tabuleiro de suposições e verifica se ainda há navios presentes no tabuleiro

//esse meu primeiro return esta retornando que ainda tem navios no tabuleiro

// e meu ultimo return esta me retornando que não há mais navios no tabuleiro e que o jogador venceu!!