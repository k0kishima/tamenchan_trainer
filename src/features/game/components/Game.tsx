import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useModal } from 'react-hooks-use-modal';
import { Board } from './Board';
import { Hand } from './Hand';
import { Question } from './Question';
import { CorrectAnswerAnimation } from '@/components/CorrectAnswerAnimation';
import { GameContext } from '@/contexts/Game';

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const Game: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
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
  const { questions } = useContext(GameContext);

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

  const [hand, machi] = questions[progress];

  const answer = (numbers: number[]): void => {
    if (parseInt(numbers.sort().join('')) === machi) {
      closeQuestionModal();
      (async () => {
        // TODO: should quit this workaround.
        openCheckModal();
        await delay(2000);
        closeCheckModal();
      })();
      setProgress(progress + 1);

      if (questions.length === progress) {
        // TODO: ここで完了画面に遷移させる
      }
    }
  };

  return (
    <>
      {hand && (
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
      )}
    </>
  );
};
