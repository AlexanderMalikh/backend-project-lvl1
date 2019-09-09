#!/usr/bin/env node

import {
  greetUser, getRandomInteger,
  startGame, createQApair,
} from '..';

const generateGameData = () => {
  const arrayQA = [];
  for (let i = 0; i < 3; i += 1) {
    const numberForCheck = getRandomInteger();
    const rightAnswer = numberForCheck % 2 === 0 ? 'yes' : 'no';
    const questionString = `${numberForCheck}`;
    arrayQA[i] = createQApair(questionString, rightAnswer);
  }
  return arrayQA;
};

const gameDescription = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
};

export default () => {
  gameDescription();
  greetUser();
  startGame(generateGameData());
};
