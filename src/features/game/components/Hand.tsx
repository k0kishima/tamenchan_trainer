import React from 'react';
import styled from 'styled-components';
import { Tile } from './Tile';
import { TileNumber } from '@/types';

export const Hand: React.FC = () => {
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
        {([1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9] as TileNumber[]).map(
          (number) => (
            <Tile color='m' number={number} key={number} />
          )
        )}
      </div>
    </Styled>
  );
};
