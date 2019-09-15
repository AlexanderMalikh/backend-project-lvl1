import {
  getRandomNumber,
  createQuestionAndAnswerPair,
} from '../utils';

import startGame from '..';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
};

const generateGameData = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const numberForCheck = getRandomNumber();
    const rightAnswer = isPrime(numberForCheck);
    const question = `${numberForCheck}`;
    questionsAndAnswers[i] = createQuestionAndAnswerPair(question, rightAnswer);
  }
  return questionsAndAnswers;
};

export default () => {
  startGame(generateGameData(), 'prime');
};
