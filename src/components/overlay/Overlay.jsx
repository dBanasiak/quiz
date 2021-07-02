import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { prizeStore } from '../../store/prizeStore';
import { OverlayContainer, OverlayContainerMask, OverlayImage, OverlayPoints, OverlayResetButton, OverlayText, OverlayTitle } from '../../style/Overlay/overlay';
import { getCurrentPrize } from './utils/getCurrentPrize';

const Overlay = ({
  gameState,
  points
}) => {
  const history = useHistory();
  const imgList = prizeStore;
  const currPrize = getCurrentPrize(imgList, points)?.[0];

  const onResetButtonClick = () => {
    history.push('/');
  };

  return (
    !gameState && 
      <OverlayContainerMask>
        <OverlayContainer>
          <OverlayTitle>
            { points ? 'YOU WIN' : 'YOU LOOSE'}
          </OverlayTitle>
          <OverlayPoints winner={points}>
            Your score is { points } points
          </OverlayPoints>
          {currPrize?.url && currPrize?.altText &&
            <OverlayImage src={currPrize?.url} alt={currPrize?.altText} />
          }
          {currPrize?.text &&
            <OverlayText>
              {currPrize?.text}
            </OverlayText>
          }
          <OverlayResetButton onClick={onResetButtonClick}>
            RESET
          </OverlayResetButton>
        </OverlayContainer>
      </OverlayContainerMask>
  );
};

Overlay.propTypes = {
  gameState: PropTypes.bool,
  points: PropTypes.number
};

export default Overlay;
