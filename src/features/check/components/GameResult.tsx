import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// TODO: @/components へ移動する
import { Board } from '@/features/game/components/Board';
import { CompleteAnimation } from '@/components/CompleteAnimation';

export const GameResult: React.FC = () => {
  return (
    <Styled>
      <div className='board-container'>
        <Board>
          <div className='animation-container'>
            <div className='animation'>
              <Link to='/'>
                <CompleteAnimation />
              </Link>
            </div>
          </div>
        </Board>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  height: 100%;

  .board-container {
    height: 100%;
  }

  .animation-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .animation {
    max-width: 30vw;
  }
`;
