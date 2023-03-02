import styled from 'styled-components';

const Time = styled.h1`
  margin-top: -1em;
  margin-bottom: 0;
  font-size: 6em;
  text-align: center;
  color: #ddd;
`

const TimeDisplay = ({ children: time }) => {

  const formatTime = () => {
    const miliseconds = time * 1000
    const start = (time < 60) ? 17 : (time < 3600) ? 14 : 11
    const end = 22

    return new Date(miliseconds)
      .toISOString().slice(start, end).replace(".", ":")
  }

  return <Time>{formatTime(time)}</Time>
}

export { TimeDisplay }
