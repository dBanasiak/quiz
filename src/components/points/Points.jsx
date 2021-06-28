import React from 'react';
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

export default Points;
