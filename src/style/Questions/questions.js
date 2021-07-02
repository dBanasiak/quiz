import styled from 'styled-components';

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 700px;
  padding: 44px 22px;
`;

export const QuestionsTitle = styled.h2`
  margin-bottom: 32px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(50, 50, 50, .8);
`;

export const QuestionsWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const QuestionsItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const QuestionButton = styled.button`
  border: 0;
  cursor: pointer;
  padding: 16px 24px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  color: #000;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 32px;
  max-width: 320px;
  font-size: 18px;
  text-align: left;
  opacity: 1;
  transition: all .3s ease-in-out;
  background: #fff;

  &:hover {
    opacity: .6;
  }
`;

export const QuestionsListLength = styled.p`
  text-align: center;
  font-weight: 600;
`;
