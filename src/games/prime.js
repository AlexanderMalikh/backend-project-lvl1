import { cons } from '@hexlet/pairs';

import getRandomInRange from '../utils';

import playGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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
  playGame(generateGameData, gameDescription);
};
