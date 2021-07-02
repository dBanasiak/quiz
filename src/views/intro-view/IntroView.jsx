import React from 'react';
import { IntroViewButton, IntroViewContainer } from '../../style/IntroView/introView';

const IntroView = () => {

  return (
    <IntroViewContainer>
      <IntroViewButton to='/game'>START</IntroViewButton>
      <IntroViewButton to='' disabled={true} >ADD QUESTIONS (TODO)</IntroViewButton>
    </IntroViewContainer>
  );
};

export default IntroView;
