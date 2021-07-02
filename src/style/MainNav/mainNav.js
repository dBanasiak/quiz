import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainNavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const MainNavItem = styled(Link)`
  border: 0;
  cursor: pointer;
  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: ${({ disabled }) => disabled ? '#999' : '#000'};
  width: 100%;
  margin: 0 auto;
  margin-bottom: 32px;
  max-width: 200px;
  font-size: 18px;
  text-align: left;
  opacity: 1;
  transition: all .3s ease-in-out;
  background: #fff;
  text-align: center;
  font-weight: 600;

  &:hover {
    opacity: .6;
  }
`;

export const MainNavItems = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  flex-direction: column;
  background-color: #000;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const MainNavToggler = styled.button`
  border: 0;
  background: transparent;
  font-size: 32px;
  transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(90deg)'};
  cursor: pointer;
  position: absolute;
  transition: all .1s ease-in-out;
  width: 30px;
  height: 30px;
  left: 30px;
  top: 22px;
  z-index: 9;

  &:before,
  &:after {
    content: '|';
    font-size: inherit;
    display: block;
    position: absolute;
  }

  &:before {
    transform: ${({ isOpen }) => isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    left: ${({ isOpen }) => isOpen ? '3px' : '2px'};
    display: ${({ isOpen }) => isOpen ? 'none' : 'block'};
  }

  &:after {
    transform: ${({ isOpen }) => isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
    left: ${({ isOpen }) => isOpen ? '13px' : '20px'};
    top: ${({ isOpen }) => isOpen ? '1px' : '0'};
  }
`;
