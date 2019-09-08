#!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName = '';

export const greetUser = () => {
  userName = readlineSync.question('May i have your name?');
  console.log(`Hello, ${userName}\n`);
};

export const guessEven = () => {
  let rightAnswerCounter = 0;
  while (rightAnswerCounter < 3) {
    const questionNumber = Math.floor(Math.random() * (101));
    const userAnswer = readlineSync.question(`Question: ${questionNumber}`);
    if (questionNumber % 2 === 0 && userAnswer === 'yes') {
      rightAnswerCounter += 1;
      console.log('Correct!');
    } else if (questionNumber % 2 !== 0 && userAnswer === 'no') {
      rightAnswerCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }
  if (rightAnswerCounter === 3) console.log(`Congratulations, ${userName}!`);
};
