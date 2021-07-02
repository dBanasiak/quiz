import React, { useState } from 'react';
import { MainNavContainer, MainNavItem, MainNavItems, MainNavToggler } from '../../style/MainNav/mainNav';

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainNavContainer isOpen={isOpen}>
      <MainNavToggler
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >|
      </MainNavToggler>
      {
        isOpen && 
        <MainNavItems>
          <MainNavItem to='/' onClick={() => setIsOpen(false)}>Main</MainNavItem>
          <MainNavItem to='/game' onClick={() => setIsOpen(false)}>Back to game (TODO)</MainNavItem>
        </MainNavItems>
      }
    </MainNavContainer>
  );
};

export default MainNav;
