import { TimerButton } from './TimerButton';

import styled from 'styled-components';

const Buttons = styled.section`
  display: flex;
  align-items: center;
  gap: 3em;
  position: absolute;
  bottom: 14em;
`

const TimerButtons = ({ children: { reset, playNpause, lap } }) => {
  return (
    <Buttons id="buttons">
      <TimerButton>{reset}</TimerButton>
      <TimerButton>{playNpause}</TimerButton>
      <TimerButton>{lap}</TimerButton>
    </Buttons>
  )
};

export { TimerButtons };
