import {
  getRandomNumber,
  createQuestionAndAnswerPair,
} from '../utils';

import startGame from '..';

const makeProgression = (firstNumber, diff, index) => {
  let quest;
  for (let i = 1; i < 11; i += 1) {
    if (i === index) quest += '.. ';
    else quest += `${firstNumber + diff * (i - 1)} `;
  }
  return quest;
};
const generateGameData = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const firstNumberOfProgression = getRandomNumber();
    const difference = getRandomNumber();
    const missingIndex = Math.floor(Math.random() * 10 + 1);
    const rightAnswer = firstNumberOfProgression + difference * (missingIndex - 1);
    const question = makeProgression(firstNumberOfProgression, difference, missingIndex);
    questionsAndAnswers[i] = createQuestionAndAnswerPair(question, String(rightAnswer));
  }
  return questionsAndAnswers;
};
export default () => {
  startGame(generateGameData(), 'progression');
};
