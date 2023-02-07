import './styles.css';

const TimerButton = ({ children: { action, style, label } }) => {
  return (
    <button onClick={action} className={style}>
      <span>{label}</span>
    </button>
  )
};

export { TimerButton };
