import { getRandomInRange, cons } from '../utils';

import startGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"\n';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const question = getRandomInRange(1, 100);
  const answer = isEven(getRandomInRange(1, 100)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => {
  startGame(generateGameData, gameDescription);
};
