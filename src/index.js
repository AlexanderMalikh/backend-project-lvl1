import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const roundsQuantity = 3;

export default (generateGameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}\n`);
  let rightAnswerCounter = 0;
  for (let i = 0; i < roundsQuantity; i += 1) {
    const gameData = generateGameData();
    const userAnswer = readlineSync.question(`Question: ${car(gameData)} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === (cdr(gameData))) {
      rightAnswerCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(gameData)}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (rightAnswerCounter === roundsQuantity) console.log(`Congratulations, ${userName}!`);
};
