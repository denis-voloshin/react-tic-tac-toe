import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`;

const appRoot = document.getElementById('app');

export const Modal = ({ children }) => {
  const modalContainer = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    appRoot.appendChild(modalContainer);

    return () => {
      appRoot.removeChild(modalContainer);
    };
  }, []);

  return createPortal(<Overlay>{ children }</Overlay>, modalContainer);
};

Modal.propTypes = {
  children: PropTypes.node
};
