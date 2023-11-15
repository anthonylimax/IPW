function isMagicSquare(matrix) {
  const n = matrix.length;

  // Calcula a soma da primeira linha para usar como referência
  let sumRef = 0;
  for (let j = 0; j < n; j++) {
    sumRef += matrix[0][j];
  }

  // Verifica a soma das linhas
  for (let i = 1; i < n; i++) {
    let rowSum = 0;
    for (let j = 0; j < n; j++) {
      rowSum += matrix[i][j];
    }
    if (rowSum !== sumRef) {
      return false;
    }
  }

  // Verifica a soma das colunas
  for (let j = 0; j < n; j++) {
    let colSum = 0;
    for (let i = 0; i < n; i++) {
      colSum += matrix[i][j];
    }
    if (colSum !== sumRef) {
      return false;
    }
  }

  // Verifica a soma da diagonal principal
  let diagSum = 0;
  for (let i = 0; i < n; i++) {
    diagSum += matrix[i][i];
  }
  if (diagSum !== sumRef) {
    return false;
  }

  // Verifica a soma da diagonal secundária
  let revDiagSum = 0;
  for (let i = 0; i < n; i++) {
    revDiagSum += matrix[i][n - 1 - i];
  }
  if (revDiagSum !== sumRef) {
    return false;
  }

  // Se todas as verificações passarem, é um Quadrado Mágico
  return true;
}

// Função para ler uma matriz quadrada do usuário
function readMatrix() {
  const n = parseInt(prompt("Digite a ordem da matriz quadrada (n x n):"));
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i].push(parseInt(prompt(`Digite o elemento da posição (${i + 1},${j + 1}):`)));
    }
  }
  return matrix;
}

const matrix = readMatrix();
const isMagic = isMagicSquare(matrix);

if (isMagic) {
  console.log("É um Quadrado Mágico!");
} else {
  console.log("Não é um Quadrado Mágico.");
}
