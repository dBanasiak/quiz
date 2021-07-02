import React from 'react';
import PropTypes from 'prop-types';
import { PointsContainer, PointsText } from '../../style/Points/points';
import Timer from '../timer/Timer';

const Points = ({
  points,
  setGameState,
  gameState
}) => {
  return (
    <PointsContainer>
      <Timer
        setGameState={setGameState}
        gameState={gameState}
      />
      <PointsText>
        Score: {points}
      </PointsText>
    </PointsContainer>
  );
};

Points.propTypes = {
  points: PropTypes.number,
  setGameState: PropTypes.func,
  gameState: PropTypes.bool
};

export default Points;
