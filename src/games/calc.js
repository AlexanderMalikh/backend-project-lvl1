import {
  getRandomInRange, cons, car, cdr,
} from '../utils';

import startGame from '..';

const gameDescription = 'What is the result of the expression?\n';

const operators = ['+', '-', '*'];

const doCalc = (pair, calculation) => {
  switch (calculation) {
    case ('+'): return car(pair) + cdr(pair);
    case ('-'): return car(pair) - cdr(pair);
    case ('*'): return car(pair) * cdr(pair);
    default: return null;
  }
};

const generateGameData = () => {
  const randomPair = cons(getRandomInRange(1, 10), getRandomInRange(1, 10));
  const operator = operators[getRandomInRange(0, 2)];
  const rightAnswer = doCalc(randomPair, operator);
  const question = `${car(randomPair)} ${operator} ${cdr(randomPair)}`;
  return cons(question, String(rightAnswer));
};

export default () => {
  startGame(generateGameData, gameDescription);
};
