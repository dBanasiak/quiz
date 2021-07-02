import styled from 'styled-components';

export const PointsContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 12px 0;
  background: #2C415A;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  flex-direction: column;
`;

export const PointsText = styled.p`
  font-size: 22px;
  font-weight: 600;
`;
