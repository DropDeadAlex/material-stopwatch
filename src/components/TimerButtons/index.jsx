import { TimerButton } from '../TimerButton';
import { Buttons } from './styles'

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
