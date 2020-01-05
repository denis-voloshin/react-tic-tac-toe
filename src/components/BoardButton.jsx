import React from 'react';
import styled, { css } from 'styled-components';
import * as PropTypes from 'prop-types';

export const BoardButton = styled(({ active, ...props }) => <button type="button" {...props} />)`
  width: 100px;
  height: 100px;
  outline: 0;
  border: 0;
  border-radius: 50%;
  margin: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 20px;

  :hover {
    box-shadow: 0 0 0 2px #3f82bd;
  }

  ${props => props.active && css`
    background-color: #7bb7ec;
    box-shadow: 0 0 0 2px #3f82bd;
    cursor: not-allowed;
  `};

  ${props => !props.active && css`
    background-color: #4fa3ec;
    cursor: pointer;
  `};

  @media screen and (max-width: 360px), screen and (max-height: 360px) {
    width: 65px;
    height: 65px;
  }
`;

BoardButton.propTypes = {
  active: PropTypes.bool
};
