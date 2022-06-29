import React from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';
import { TileNumber } from '@/types';

type Props = {
  number: number;
};

export const Hand: React.FC<Props> = ({ number }: Props) => {
  const Styled = styled.div`
    .tile-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tile-container img {
      max-width: 7vw;
    }
  `;

  return (
    <Styled>
      <div className='tile-container'>
        {(
          Array.from(String(number)).map((n) => parseInt(n)) as TileNumber[]
        ).map((n, i) => (
          <Tile color='m' number={n} key={i} />
        ))}
      </div>
    </Styled>
  );
};
