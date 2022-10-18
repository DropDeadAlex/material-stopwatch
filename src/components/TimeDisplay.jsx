import React from "react";

const TimeDisplay = ({ time }) => {
  const formatTime = (time) => {
    const miliseconds = time * 1000
    const start = (time < 60) ? 17 : (time < 3600) ? 14 : 11
    const end = 22
    
    const formatado = new Date(miliseconds)
    .toISOString().slice(start, end).replace(".",":")
    
    return formatado
  };

  return <h1>{formatTime(time)}</h1>
}

export default TimeDisplay;
