import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IntroViewContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right top, #252a3f, #24293c, #222839, #212635, #202532);
`;

export const IntroViewButton = styled(Link)`
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
