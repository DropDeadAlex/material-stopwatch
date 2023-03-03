import { Button, Icon } from './styles';

const TimerButton = ({ children: { action, style, label } }) => {
  return (
    <Button onClick={action} className={style}>
      <Icon>{label}</Icon>
    </Button>
  )
};

export { TimerButton };
