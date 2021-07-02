import React from 'react';
import PropTypes from 'prop-types';
import { PointsContainer, PointsText } from '../../style/Points/points';
import Timer from '../timer/Timer';

const Points = ({
  points,
  setGameState,
  currSlide
}) => {
  return (
    <PointsContainer>
      <PointsText>
        Score: {points}
      </PointsText>
      <Timer
        setGameState={setGameState}
        currSlide={currSlide}
      />
    </PointsContainer>
  );
};

Points.propTypes = {
  points: PropTypes.number,
  setGameState: PropTypes.func,
  currSlide: PropTypes.number
};

export default Points;
