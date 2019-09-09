#!/usr/bin/env node

import {
  greetUser, getRandomIntegerPair,
  getResultOfUsingRandomOperator, getRandomOperator,
  startGame, createQApair, car, cdr,
} from '..';

const generateGameData = () => {
  const arrayQA = [];
  for (let i = 0; i < 3; i += 1) {
    const randomPairOfNums = getRandomIntegerPair();
    const operator = getRandomOperator();
    const rightAnswer = getResultOfUsingRandomOperator(randomPairOfNums, operator);
    const question = `${car(randomPairOfNums)} ${operator} ${cdr(randomPairOfNums)}`;
    arrayQA[i] = createQApair(question, String(rightAnswer));
  }
  return arrayQA;
};
const gameDescription = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
};

export default () => {
  gameDescription();
  greetUser();
  startGame(generateGameData());
};
