import { getRandomInRange, cons } from '../utils';

import startGame from '..';

const gameDescription = 'What number is missing in the progression?\n';

const progressionLength = 10;

const makeProgression = (firstNumber, diff, index) => {
  let progressionResult;
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === index) progressionResult += '.. ';
    else progressionResult += `${firstNumber + diff * (i - 1)} `;
  }
  return progressionResult;
};
const generateGameData = () => {
  const firstNumberOfProgression = getRandomInRange(1, 20);
  const difference = getRandomInRange(1, 10);
  const missingIndex = getRandomInRange(1, 10);
  const rightAnswer = firstNumberOfProgression + difference * (missingIndex - 1);
  const question = makeProgression(firstNumberOfProgression, difference, missingIndex);
  return cons(question, String(rightAnswer));
};
export default () => {
  startGame(generateGameData, gameDescription);
};
