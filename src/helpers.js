import _ from 'lodash/fp';

export const SYMBOLS = {
  X: 'X',
  O: 'O'
};

export const emptyBoardRow = _.times(() => null, 3);

export const mapIndexed = _.map.convert({ cap: false });

export const isGameWon = board => {
  const tests = [
    // Diagonal
    board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2],
    board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0],

    // Vertical
    board[0][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0],
    board[0][1] && board[0][1] === board[1][1] && board[1][1] === board[2][1],
    board[0][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2],

    // Horizontal
    board[0][0] && board[0][0] === board[0][1] && board[0][1] === board[0][2],
    board[1][0] && board[1][0] === board[1][1] && board[1][1] === board[1][2],
    board[2][0] && board[2][0] === board[2][1] && board[2][1] === board[2][2]
  ];

  return _.some(_.identity, tests);
};
