#!/usr/bin/env node

import {
  greetUser, getRandomIntegerPair,
  getResultOfUsingRandomOperator, getRandomOperator,
  startGame, createQApair, car, cdr,
} from '..';

const calc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const arrayQA = [];
  for (let i = 0; i < 3; i += 1) {
    const pair = getRandomIntegerPair();
    const operator = getRandomOperator();
    const answer = getResultOfUsingRandomOperator(pair, operator);
    const question = `${car(pair)} ${operator} ${cdr(pair)}`;
    arrayQA[i] = createQApair(question, String(answer));
  }
  greetUser();
  startGame(arrayQA);
};


calc();
