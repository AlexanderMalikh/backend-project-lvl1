import {
  getRandomNumberPair,
  car, cdr, createQuestionAndAnswerPair,
} from '../utils';

import startGame from '..';

const getRandomOperator = () => {
  let operator = '';
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      operator = '+';
      break;
    case 1:
      operator = '-';
      break;
    case 2:
      operator = '*';
      break;
    default:
      operator = null;
      break;
  }
  return operator;
};

export const getResultOfUsingRandomOperator = (pairOfNums, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = car(pairOfNums) + cdr(pairOfNums);
      break;
    case '-':
      result = car(pairOfNums) - cdr(pairOfNums);
      break;
    case '*':
      result = car(pairOfNums) * cdr(pairOfNums);
      break;
    default:
      result = null;
      break;
  }
  return result;
};

const generateGameData = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const randomPairOfNums = getRandomNumberPair();
    const operator = getRandomOperator();
    const rightAnswer = getResultOfUsingRandomOperator(randomPairOfNums, operator);
    const question = `${car(randomPairOfNums)} ${operator} ${cdr(randomPairOfNums)}`;
    questionsAndAnswers[i] = createQuestionAndAnswerPair(question, String(rightAnswer));
  }
  return questionsAndAnswers;
};

export default () => {
  startGame(generateGameData(), 'calc');
};
