import './styles.css';

import { TimerButton } from '../TimerButton';

const TimerButtons = ({ children: { reset, playNpause, lap } }) => {
  return (
    <section id="buttons">
      <TimerButton>{reset}</TimerButton>
      <TimerButton>{playNpause}</TimerButton>
      <TimerButton>{lap}</TimerButton>
    </section>
  )
};

export { TimerButtons };
