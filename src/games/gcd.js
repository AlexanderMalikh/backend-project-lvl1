import {
  cons, car, cdr, getRandomInRange,
} from '../utils';

import startGame from '..';

const gameDescription = 'nFind the greatest common divisor of given numbers.\n';

const findGcd = (m, n) => {
  if (n === 0) {
    return m;
  }
  return findGcd(n, m % n);
};

const generateGameData = () => {
  const randomPair = cons(getRandomInRange(1, 50), getRandomInRange(1, 50));
  const rightAnswer = findGcd(car(randomPair), cdr(randomPair));
  const question = `${car(randomPair)} ${cdr(randomPair)}`;
  return cons(question, String(rightAnswer));
};

export default () => {
  startGame(generateGameData, gameDescription);
};
