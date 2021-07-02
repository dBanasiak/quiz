import React from 'react';
import PropTypes from 'prop-types';
import { PointsText } from '../../style/Points/points';

const Points = ({
  points
}) => {
  return (
    <PointsText>
      Score: {points}
    </PointsText>
  );
};

Points.propTypes = {
  points: PropTypes.number
};

export default Points;
