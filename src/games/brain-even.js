#!/usr/bin/env node

import {
  greetUser, getRandomInteger,
  startGame, createQApair,
} from '..';

const generateContent = () => {
  const arrayQA = [];
  for (let i = 0; i < 3; i += 1) {
    const evenNumber = getRandomInteger();
    const answer = evenNumber % 2 === 0 ? 'yes' : 'no';
    const question = `${evenNumber}`;
    arrayQA[i] = createQApair(question, answer);
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
  startGame(generateContent());
};
