import { cons } from '@hexlet/pairs';

import getRandomInRange from '../utils';

import playGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomInRange(1, 100);
  const answer = isEven(getRandomInRange(1, 100)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  playGame(generateGameData, gameDescription);
};
