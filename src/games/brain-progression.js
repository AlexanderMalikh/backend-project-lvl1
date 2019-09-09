#!/usr/bin/env node

import {
  greetUser, getRandomInteger,
  startGame, createQApair,
} from '..';

const generateGameData = () => {
  const arrayQA = [];
  for (let i = 0; i < 3; i += 1) {
    let questionString = '';
    const firstNumberOfProgression = getRandomInteger();
    const difference = getRandomInteger();
    const missingIndex = Math.floor(Math.random() * 10 + 1);
    const rightAnswer = firstNumberOfProgression + difference * (missingIndex - 1);
    for (let j = 1; j < 11; j += 1) {
      if (j === missingIndex)questionString += '.. ';
      else questionString += `${firstNumberOfProgression + difference * (j - 1)} `;
    }
    arrayQA[i] = createQApair(questionString, String(rightAnswer));
  }
  return arrayQA;
};

export const gameDescription = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?\n');
};

export default () => {
  gameDescription();
  greetUser();
  startGame(generateGameData());
};
