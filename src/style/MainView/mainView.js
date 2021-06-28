import styled from "styled-components";

export const MainViewContainer = styled.div`
   background: ${({ color }) => color};
   min-height: 100vh;
   transition: all .3s ease-in-out;
`;
