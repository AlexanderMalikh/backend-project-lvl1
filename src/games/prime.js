import { getRandomInRange, cons } from '../utils';

import startGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateGameData = () => {
  const question = getRandomInRange(1, 50);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => {
  startGame(generateGameData, gameDescription);
};
