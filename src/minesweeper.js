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
