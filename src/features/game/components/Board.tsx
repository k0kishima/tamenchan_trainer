import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
};

export const Board: React.FC<Props> = ({ children }: Props) => {
  const Styled = styled.div`
    background-color: green;
    height: 100%;
    width: 100%;
  `;

  return <Styled>{children}</Styled>;
};
