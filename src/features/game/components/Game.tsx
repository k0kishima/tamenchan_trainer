import React from 'react';
import styled from 'styled-components';
import { useModal } from 'react-hooks-use-modal';
import { Board } from './Board';
import { Hand } from './Hand';
import { Question } from './Question';
import { chooseQuestions } from '@/utils/question';
import { CorrectAnswerAnimation } from '@/components/CorrectAnswerAnimation';

// TODO: implement this.
const [hand, machi] = chooseQuestions(2)[0];

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Game: React.FC = () => {
  const [QuestionModal, openQuestionModal, closeQuestionModal] = useModal(
    'root',
    {
      preventScroll: true,
      closeOnOverlayClick: false,
    }
  );

  const [CheckModal, openCheckModal, closeCheckModal] = useModal('root', {
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
      closeQuestionModal();
      (async () => {
        // TODO: should quit this workaround.
        openCheckModal();
        await delay(2000);
        closeCheckModal();
      })();
    }
  };

  return (
    <Styled>
      <div className='board-container' onClick={openQuestionModal}>
        <Board>
          <div className='hand'>
            <Hand number={hand} />
          </div>
        </Board>
      </div>

      <div className='modal-container'>
        <QuestionModal>
          <Question answer={answer} />
        </QuestionModal>

        <CheckModal>
          <CorrectAnswerAnimation />
        </CheckModal>
      </div>
    </Styled>
  );
};
