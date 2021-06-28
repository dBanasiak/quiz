import styled from "styled-components";

export const OverlayContainerMask = styled.div`
  display: block;
  background-color: #fff;
  position: fixed;
  background-color: rgba(0, 0, 0, .4);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 75%;
  min-height: 75%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 22px;
`;

export const OverlayTitle = styled.p`
  font-size: 22px;
  color: #000;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const OverlayPoints = styled.p`
  font-size: 28px;
  color: ${({ winner }) => (winner ? '#0f0' : '#f00')};
`;

export const OverlayResetButton = styled.button`
  background: #D15D5B;
  border: 0;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: #fff;
  margin: 24px 0;
  padding: 12px 32px;
  font-weight: 100;
  font-size: 18px;
  transition: all .3s ease-in-out;
  cursor: pointer;
  opacity: .8;

  &:hover {
    padding: 12px 42px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 6px 6px rgba(0,0,0,0.6);
    opacity: 1;
  }
`;

export const OverlayImage = styled.img`
  max-width: 100%;
  max-height: 320px;
  padding: 22px;
`;

export const OverlayText = styled.p`
  color: #000;
`;
