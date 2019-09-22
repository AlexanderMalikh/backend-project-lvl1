import { cons } from '@hexlet/pairs';

import getRandomInRange from '../utils';

import playGame from '..';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (m, n) => {
  if (n === 0) {
    return m;
  }
  return findGcd(n, m % n);
};

const generateGameData = () => {
  const number1 = getRandomInRange(1, 50);
  const number2 = getRandomInRange(1, 50);
  const rightAnswer = findGcd(number1, number2);
  const question = `${number1} ${number2}`;
  return cons(question, String(rightAnswer));
};

export default () => {
  playGame(generateGameData, gameDescription);
};
