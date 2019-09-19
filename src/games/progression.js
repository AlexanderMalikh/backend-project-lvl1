import { cons } from '@hexlet/pairs';

import getRandomInRange from '../utils';

import playGame from '..';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const makeQuestion = (firstNumber, diff, index) => {
  let data = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === index) data = `${data}.. `;
    else data = `${data}${firstNumber + diff * (i - 1)} `;
  }
  return data;
};
const generateGameData = () => {
  const begin = getRandomInRange(1, 20);
  const difference = getRandomInRange(1, 10);
  const missingElementIndex = getRandomInRange(1, progressionLength);
  const rightAnswer = begin + difference * (missingElementIndex - 1);
  const question = makeQuestion(begin, difference, missingElementIndex);
  return cons(question, String(rightAnswer));
};
export default () => {
  playGame(generateGameData, gameDescription);
};
