import {
  createQuestionAndAnswerPair, cons,
  car, cdr, getRandomNumberPair,
} from '../utils';

import startGame from '..';

const findGcd = (pairOfNums) => {
  const m = car(pairOfNums);
  const n = cdr(pairOfNums);
  if (n === 0) {
    return m;
  }
  return findGcd(cons(n, m % n));
};
const generateGameData = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const randomPairOfNums = getRandomNumberPair();
    const rightAnswer = findGcd(randomPairOfNums);
    const question = `${car(randomPairOfNums)} ${cdr(randomPairOfNums)}`;
    questionsAndAnswers[i] = createQuestionAndAnswerPair(question, String(rightAnswer));
  }
  return questionsAndAnswers;
};

export default () => {
  startGame(generateGameData(), 'gcd');
};
