import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { GameContext } from '@/contexts/Game';
import { ALL_TILE_NUMBERS } from '@/types';
import { Tile } from './Tile';

type Props = {
  answer: (numbers: number[]) => void;
};

export const Question: React.FC<Props> = ({ answer }: Props) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const { tileColor } = useContext(GameContext);

  useEffect(() => {
    answer(selectedNumbers);
  }, [selectedNumbers]);

  const Styled = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: stretch;

    .tile-container {
      margin: 1vw;
      padding: 0px;
    }
    .selected {
      opacity: 1;
    }
    .unselected {
      opacity: 0.5;
    }
    img {
      max-width: 7vw;
    }
  `;

  const toggleSelectedNumbers = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
    answer(selectedNumbers);
  };

  return (
    <Styled>
      {ALL_TILE_NUMBERS.map((number, i) => (
        <span
          className={`tile-container ${
            selectedNumbers.includes(number) ? 'selected' : 'unselected'
          }`}
          onClick={() => toggleSelectedNumbers(number)}
          key={i}
        >
          <Tile color={tileColor} number={number} key={i} />
        </span>
      ))}
    </Styled>
  );
};
