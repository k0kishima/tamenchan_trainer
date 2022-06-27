import React from 'react';
import styled from 'styled-components';

export const Board: React.FC = () => {
  const Styled = styled.div`
    background-color: green;
    height: 100%;
    width: 100%;
  `;

  return <Styled></Styled>;
};
