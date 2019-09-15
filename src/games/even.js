import {
  getRandomNumber, createQuestionAndAnswerPair,
} from '../utils';

import startGame from '..';

const generateGameData = () => {
  const questionsAndAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const numberForCheck = getRandomNumber();
    const rightAnswer = numberForCheck % 2 === 0 ? 'yes' : 'no';
    const question = `${numberForCheck}`;
    questionsAndAnswers[i] = createQuestionAndAnswerPair(question, rightAnswer);
  }
  return questionsAndAnswers;
};

export default () => {
  startGame(generateGameData(), 'even');
};
