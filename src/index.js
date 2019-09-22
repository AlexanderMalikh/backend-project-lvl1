import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const roundsQuantity = 3;

export default (generateGameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log('');
  const userName = readlineSync.question('May i have your name?');
  console.log(`Hello, ${userName}\n`);
  for (let i = 0; i < roundsQuantity; i += 1) {
    const gameData = generateGameData();
    const question = car(gameData);
    const answer = cdr(gameData);
    const userAnswer = readlineSync.question(`Question: ${question}`);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
