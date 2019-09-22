import { cons } from '@hexlet/pairs';

import getRandomInRange from '../utils';

import playGame from '..';

const gameDescription = 'What number is missing in the progression?';

const makeQuestion = (firstElement, diff, elementIndex, length) => {
  let data = '';
  for (let i = 1; i <= length; i += 1) {
    if (i === elementIndex) data = `${data} .. `;
    else data = `${data} ${firstElement + diff * (i - 1)}`;
  }
  return data;
};
const generateGameData = () => {
  const progressionLength = 10;
  const begin = getRandomInRange(1, 20);
  const difference = getRandomInRange(1, 10);
  const missingElementIndex = getRandomInRange(1, progressionLength);
  const rightAnswer = begin + difference * (missingElementIndex - 1);
  const question = makeQuestion(begin, difference, missingElementIndex, progressionLength);
  return cons(question, String(rightAnswer));
};
export default () => {
  playGame(generateGameData, gameDescription);
};
