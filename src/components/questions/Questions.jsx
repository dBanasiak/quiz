import React from 'react';
import PropTypes from 'prop-types';
import {
  questionsStore
} from '../../store/questionsStore';
import { QuestionButton, QuestionsContainer, QuestionsItem, QuestionsListLength, QuestionsTitle, QuestionsWrapper } from '../../style/Questions/questions';

const Questions = ({
  setPointsClick,
  setSlideClick,
  slideIndex,
  setBackgroundColor
}) => {
  const questionsList = questionsStore;
  const onAnswerClick = (answer, correctAnswerIndex, index) => {
    setBackgroundColor(answer + 1 === correctAnswerIndex ? '#4EC290' : '#D15D5B');

    setTimeout(() => {
      if (answer + 1 === correctAnswerIndex) {
        setPointsClick();
        setSlideClick(index, questionsList.length);
      } else {
        setSlideClick(index, questionsList.length);
      }
      setBackgroundColor(false);
    }, 1000);
  };

  return (
    <QuestionsContainer>
      {
        questionsList.map(({ title, answers, correctAnswerIndex }, index) => (
          index === slideIndex &&
            <QuestionsWrapper key={title + index}>
              <QuestionsTitle>{index + 1}. { title }</QuestionsTitle>
              {
                answers.map((answer, i) => (
                  <QuestionsItem key={answer + i}>
                    <QuestionButton
                      onClick={() => onAnswerClick(i, correctAnswerIndex, index)}
                    >
                      {i + 1}. {answer}
                    </QuestionButton>
                  </QuestionsItem>
                ))
              }
              <QuestionsListLength>
                {index + 1}/{questionsList.length}
              </QuestionsListLength>
            </QuestionsWrapper>
        ))
      }
    </QuestionsContainer>
  );
};

Questions.propTypes = {
  setPointsClick: PropTypes.func,
  setSlideClick: PropTypes.func,
  slideIndex: PropTypes.func,
  setBackgroundColor: PropTypes.func
};

export default Questions;