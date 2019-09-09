#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

let userName = '';

export const greetUser = () => {
  userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}\n`);
};

export const getRandomInteger = () => Math.floor(Math.random() * (100));

export const getRandomIntegerPair = () => cons(getRandomInteger(), getRandomInteger());

export const getRandomOperator = () => {
  let operator = '';
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      operator = '+';
      break;
    case 1:
      operator = '-';
      break;
    case 2:
      operator = '*';
      break;
    default:
      operator = null;
      break;
  }
  return operator;
};

export const getResultOfUsingRandomOperator = (pair, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = car(pair) + cdr(pair);
      break;
    case '-':
      result = car(pair) - cdr(pair);
      break;
    case '*':
      result = car(pair) * cdr(pair);
      break;
    default:
      result = null;
      break;
  }
  return result;
};

export const createQApair = (q, a) => cons(q, a);

export const findGcd = (pair) => {
  const m = car(pair);
  const n = cdr(pair);
  if (m === 0) return n;
  if (n === 0) return m;
  if (m === n) return m;
  if (m === 1) return 1;
  if (n === 1) return 1;
  if (m % 2 === 0 && n % 2 === 0) return 2 * findGcd(cons(m / 2, n / 2));
  if (m % 2 === 0 && n % 2 !== 0) return findGcd(cons(m / 2, n));
  if (m % 2 !== 0 && n % 2 === 0) return findGcd(cons(m, n / 2));
  if (m % 2 !== 0 && n % 2 !== 0 && n > m) return findGcd(cons((n - m) / 2, m));
  return findGcd(cons((m - n) / 2, n));
};

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
};

export const startGame = (arrayQA) => {
  let rightAnswerCounter = 0;
  for (let i = 0; i < arrayQA.length; i += 1) {
    const userAnswer = readlineSync.question(`Question: ${car(arrayQA[i])} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === (cdr(arrayQA[i]))) {
      rightAnswerCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(arrayQA[i])}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (rightAnswerCounter === 3) console.log(`Congratulations, ${userName}!`);
};

export { car, cdr };
