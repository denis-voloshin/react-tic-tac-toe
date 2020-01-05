import React, { useMemo, useState } from 'react';
import produce from 'immer';
import styled from 'styled-components';

import { SYMBOLS, emptyBoardRow, mapIndexed, getWinStatus } from '../helpers';
import { BoardButton } from './BoardButton';
import { WinPopup } from './WinPopup';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BoardRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Board = () => {
  const [board, setBoard] = useState([emptyBoardRow, emptyBoardRow, emptyBoardRow]);
  const [nextSymbol, setNextSymbol] = useState(SYMBOLS.X);

  const winner = useMemo(() => {
    const isGameWon = getWinStatus(board);

    if (isGameWon) {
      return nextSymbol === SYMBOLS.X ? SYMBOLS.O : SYMBOLS.X;
    }

    return null;
  }, [board, nextSymbol]);

  const handleButtonClick = (row, col) => () => {
    if (board[row][col]) {
      return;
    }

    setBoard(produce(draft => {
      draft[row][col] = nextSymbol;
    }));
    setNextSymbol(prevNextSymbol => {
      return prevNextSymbol === SYMBOLS.X ? SYMBOLS.O : SYMBOLS.X;
    });
  };

  const resetGame = () => {
    setBoard([emptyBoardRow, emptyBoardRow, emptyBoardRow]);
    setNextSymbol(SYMBOLS.X);
  };

  return (
    <Wrapper>
      { winner && <WinPopup winner={winner} resetGame={resetGame} /> }

      { mapIndexed((row, rowIdx) => (
        <BoardRow key={rowIdx}>
          { mapIndexed((cell, columnIdx) => (
            <BoardButton
              key={columnIdx}
              active={!!board[rowIdx][columnIdx]}
              onClick={handleButtonClick(rowIdx, columnIdx)}
            >
              { board[rowIdx][columnIdx] }
            </BoardButton>
          ))(row) }
        </BoardRow>
      ))(board) }
    </Wrapper>
  );
};
