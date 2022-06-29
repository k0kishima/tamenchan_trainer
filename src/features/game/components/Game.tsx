import React from 'react';
import styled from 'styled-components';
import { useModal } from 'react-hooks-use-modal';
import { Board } from './Board';
import { Hand } from './Hand';

export const Game: React.FC = () => {
  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
  });

  const Styled = styled.div`
    height: 100%;

    .board-container {
      height: 100%;
    }

    .hand {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  `;

  return (
    <Styled>
      <div className='board-container' onClick={open}>
        <Board>
          <div className='hand'>
            <Hand />
          </div>
        </Board>
      </div>

      <Modal>
        <div>
          <h1>Title</h1>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal>
    </Styled>
  );
};
