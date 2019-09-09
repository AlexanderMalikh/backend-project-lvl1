#!/usr/bin/env node

import {
  greetUser, getRandomInteger,
  startGame, createQApair, isPrime,
} from '..';

const generateContent = () => {
  const arrayQA = [];
  for (let i = 0; i < 3; i += 1) {
    const numberForQuestion = getRandomInteger();
    const answer = isPrime(numberForQuestion);
    const question = `${numberForQuestion}`;
    arrayQA[i] = createQApair(question, answer);
  }
  return arrayQA;
};

const gameDescription = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
};

export default () => {
  gameDescription();
  greetUser();
  startGame(generateContent());
};
