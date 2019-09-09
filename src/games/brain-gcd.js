#!/usr/bin/env node

import {
  greetUser, getRandomIntegerPair, findGcd,
  startGame, createQApair, car, cdr,
} from '..';

const generateGameData = () => {
  const arrayQA = [];
  for (let i = 0; i < 3; i += 1) {
    const randomPairOfNums = getRandomIntegerPair();
    const rightAnswer = findGcd(randomPairOfNums);
    const questionString = `${car(randomPairOfNums)} ${cdr(randomPairOfNums)}`;
    arrayQA[i] = createQApair(questionString, String(rightAnswer));
  }
  return arrayQA;
};

export const gameDescription = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
};

export default () => {
  gameDescription();
  greetUser();
  startGame(generateGameData());
};
