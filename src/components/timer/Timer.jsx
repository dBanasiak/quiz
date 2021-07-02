import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TimerContainer, TimerText } from '../../style/Timer/timer';
import { getCounterTime } from '../../utils/getCounterTime';

const Timer = ({
  setGameState
}) => {
  const [counter, setCounter] = useState(120);

  useEffect(() => {
    if (counter === 0) {
      setGameState(false);
      return;
    }

    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <TimerContainer>
      <TimerText>
        Time: {getCounterTime(counter)}
      </TimerText>
    </TimerContainer>
  );
};

Timer.propTypes = {
  setGameState: PropTypes.func
};

export default Timer;
