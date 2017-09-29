class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows,numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows,numberOfColumns,generateBombBoard);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if(this._playerBoard[rowIndex][columnIndex] !== ' ') {
      return 'This tile has already been flipped!';
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(rowIndex, columnIndex)
    }
    this._numberOfTiles --
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,1],
    [1,-1],
    [1,0],
    [1,1]
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffsets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (neighborRowIndex>=0 && neighborRowIndex<numberOfRows
      && neighborColumnIndex>=0 && neighborColumnIndex<numberOfRows) {
      if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
    });
    return numberOfBombs;
  };
  
}

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
  let board =[];
  for (let i =0; i < numberOfRows; i++) {
    let row = [];
    for (let j =0; j < numberOfColumns; j++) {
      row.push(' ')
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows,numberOfColumns, numberOfBombs) => {
  let board =[];
  for (let i =0; i < numberOfRows; i++) {
    let row = [];
    for (let j =0; j < numberOfColumns; j++) {
      row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced ++;
    }
  }

  return board;
};





let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board:');
printBoard(playerBoard);
