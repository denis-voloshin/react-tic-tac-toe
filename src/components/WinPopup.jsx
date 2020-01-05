import React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import _ from 'lodash/fp';

import { SYMBOLS } from '../helpers';
import { Modal } from './Modal';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  border: 2px solid #3f82bd;
  border-radius: 10px;
  background-color: #4fa3ec;
  padding: 30px;
  z-index: 10;
`;

const WinMessage = styled.h3``;

const PlayAgainButton = styled.button.attrs({
  type: 'button',
  children: 'Play again'
})`
  outline: none;
  background-color: #7bb7ec;
  border: 2px solid #3f82bd;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export const WinPopup = ({ winner, resetGame }) => {
  const title = `${winner} won!`;

  return (
    <Modal>
      <Wrapper>
        <WinMessage>{ title }</WinMessage>
        <PlayAgainButton onClick={resetGame} />
      </Wrapper>
    </Modal>
  );
};

WinPopup.propTypes = {
  winner: PropTypes.oneOf(_.values(SYMBOLS)).isRequired,
  resetGame: PropTypes.func
};

WinPopup.defaultProps = {
  resetGame: _.noop
};
