import { cons } from '@hexlet/pairs';

import getRandomInRange from '../utils';

import playGame from '..';

const gameDescription = 'What is the result of the expression?\n';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case ('+'): return num1 + num2;
    case ('-'): return num1 - num2;
    case ('*'): return num1 * num2;
    default: return null;
  }
};

const generateGameData = () => {
  const number1 = getRandomInRange(1, 10);
  const number2 = getRandomInRange(1, 10);
  const operator = operators[operators.length - 1];
  const rightAnswer = calculate(number1, number2, operator);
  const question = `${number1} ${operator} ${number2}`;
  return cons(question, String(rightAnswer));
};

export default () => {
  playGame(generateGameData, gameDescription);
};
