import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

export const greetUser = () => {
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

export const getRandomNumber = () => Math.floor(Math.random() * (100));

export const getRandomNumberPair = () => cons(getRandomNumber(), getRandomNumber());

export const createQuestionAndAnswerPair = (questions, answers) => cons(questions, answers);

export const gameDescription = (gameName) => {
  const commonGreeting = 'Welcome to the Brain Games!';
  let gameGreeting;
  switch (gameName) {
    case 'even': gameGreeting = `${commonGreeting}\nAnswer "yes" if the number is even, otherwise answer "no"\n`;
      break;
    case 'calc': gameGreeting = `${commonGreeting}\nWhat is the result of the expression?\n`;
      break;
    case 'gcd': gameGreeting = `${commonGreeting}\nFind the greatest common divisor of given numbers.\n`;
      break;
    case 'prime': gameGreeting = `${commonGreeting}\nAnswer "yes" if given number is prime. Otherwise answer "no".\n`;
      break;
    case 'progression': gameGreeting = `${commonGreeting}\nWhat number is missing in the progression?\n`;
      break;
    default: gameGreeting = 'game not found';
      break;
  }
  console.log(gameGreeting);
};

export { cons, car, cdr };
