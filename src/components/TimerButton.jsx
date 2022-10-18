import React from "react";

const TimmerButton = ({ props: { action, style, label } }) => {
  return (
    <button onClick={() => action?.()} className={style}>
      <span>{label}</span>
    </button>
  )
}

export default TimmerButton;
