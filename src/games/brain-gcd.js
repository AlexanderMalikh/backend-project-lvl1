#!/usr/bin/env node

import {
  greetUser, getRandomIntegerPair, findGcd,
  startGame, createQApair, car, cdr,
} from '..';

const gcd = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
  const arrayQA = [];
  for (let i = 0; i < 3; i += 1) {
    const pair = getRandomIntegerPair();
    const answer = findGcd(pair);
    const question = `${car(pair)} ${cdr(pair)}`;
    arrayQA[i] = createQApair(question, String(answer));
  }
  greetUser();
  startGame(arrayQA);
};


gcd();
