// const board = [
//   [' ',' ',' '],
//   [' ',' ',' '],
//   [' ',' ',' ']
// ];
//
// const printBoard = (board) => {
// console.log('Current Board:');
// console.log(board[0].join(' | '));
// console.log(board[1].join(' | '));
// console.log(board[2].join(' | '));
// };
//
// printBoard(board);
//
// board[0][1] = '1';
// board[2][2] = 'B';
//
// printBoard(board);

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
console.log(generatePlayerBoard(3,3));

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
  while (numberOfBombsPlaced<numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced ++;
    // the code in while loop has the potential
    // to place bombs on top of already existing bombs.
    // This will be fixed on control flow step of the project.
  }

  return board;
};
console.log(generateBombBoard(6,6, 12));
