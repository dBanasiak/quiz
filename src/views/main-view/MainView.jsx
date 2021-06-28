import React, { useState } from 'react';
import Overlay from '../../components/overlay/Overlay';
import Points from '../../components/points/Points';
import Questions from '../../components/questions/Questions';
import { pointsPerQuestion } from '../../store/prizeStore';
import { MainViewContainer } from '../../style/MainView/mainView';

const MainView = () => {
  const [currPoints, setPoints] = useState(0);
  const [currSlide, setSlide] = useState(0);
  const [gameState, setGameState] = useState(true);
  const [isWinner, setIsWinner] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#252A3F');

  const onSetPointsClick = () => {
    setPoints(currPoints + pointsPerQuestion);
  };

  const onSetSlideClick = (slideIndex, maxLength) => {
    if (slideIndex + 1 === maxLength) {
      setIsWinner(true);
      setGameState(false);
    } else {
      setSlide(slideIndex + 1);
    }
  };

  const onSetBackgroundColor = (color) => {
    setBackgroundColor(color ? color : '#252A3F');
  };

  return (
    <MainViewContainer color={backgroundColor}>
      <Points points={currPoints} />
      <Questions
        setPointsClick={onSetPointsClick}
        setSlideClick={onSetSlideClick}
        slideIndex={currSlide}
        setBackgroundColor={onSetBackgroundColor}
      />
      <Overlay
        gameState={gameState}
        points={currPoints}
        winner={isWinner}
      />
    </MainViewContainer>
  );
};

export default MainView;
