import React from 'react';
import styled from 'styled-components';
import { useModal } from 'react-hooks-use-modal';
import { Board } from './Board';
import { Hand } from './Hand';
import { Question } from './Question';
import { chooseQuestions } from '@/utils/question';

// TODO: implement this.
const [hand, machi] = chooseQuestions(2)[0];

export const Game: React.FC = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false,
  });

  const Styled = styled.div`
    height: 100%;

    .board-container {
      height: 100%;
    }

    .board-container .hand {
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    .modal-container {
      height: 100%;
    }
  `;

  const answer = (numbers: number[]): void => {
    if (parseInt(numbers.sort().join('')) === machi) {
      close();
    }
  };

  return (
    <Styled>
      <div className='board-container' onClick={open}>
        <Board>
          <div className='hand'>
            <Hand number={hand} />
          </div>
        </Board>
      </div>

      <div className='modal-container'>
        <Modal>
          <Question answer={answer} />
        </Modal>
      </div>
    </Styled>
  );
};
