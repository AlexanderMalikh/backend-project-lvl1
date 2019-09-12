import readlineSync from 'readline-sync';
import {
  cons, car, cdr,
} from '@hexlet/pairs';

let userName = '';

export const greetUser = () => {
  userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}\n`);
};

export const getRandomNumber = () => Math.floor(Math.random() * (100));

export const getRandomNumberPair = () => cons(getRandomNumber(), getRandomNumber());

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

export const getResultOfUsingRandomOperator = (pairOfNums, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = car(pairOfNums) + cdr(pairOfNums);
      break;
    case '-':
      result = car(pairOfNums) - cdr(pairOfNums);
      break;
    case '*':
      result = car(pairOfNums) * cdr(pairOfNums);
      break;
    default:
      result = null;
      break;
  }
  return result;
};

export const createQuestionAndAnswerPair = (question, answer) => cons(question, answer);

export const findGcd = (pairOfNums) => {
  const m = car(pairOfNums);
  const n = cdr(pairOfNums);
  if (n === 0) {
    return m;
  }
  return findGcd(cons(n, m % n));
};
export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return num > 1 ? 'yes' : 'no';
};

export const gameDescription = (gameName) => {
  const commonGreeting = 'Welcome to the Brain Games!';
  let gameGreeting;
  switch (gameName) {
    case 'even': gameGreeting = `${commonGreeting}\n Answer "yes" if the number is even, otherwise answer "no"\n`;
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

export const generateGameData = (gameName) => {
  const questionsAndAnswers = [];
  let question;
  let rightAnswer;
  let randomPairOfNums;
  let numberForCheck;
  switch (gameName) {
    case ('even'):
      for (let i = 0; i < 3; i += 1) {
        numberForCheck = getRandomNumber();
        rightAnswer = numberForCheck % 2 === 0 ? 'yes' : 'no';
        question = `${numberForCheck}`;
        questionsAndAnswers[i] = createQuestionAndAnswerPair(question, rightAnswer);
      }
      break;
    case ('calc'):
      for (let i = 0; i < 3; i += 1) {
        randomPairOfNums = getRandomNumberPair();
        const operator = getRandomOperator();
        rightAnswer = getResultOfUsingRandomOperator(randomPairOfNums, operator);
        question = `${car(randomPairOfNums)} ${operator} ${cdr(randomPairOfNums)}`;
        questionsAndAnswers[i] = createQuestionAndAnswerPair(question, String(rightAnswer));
      }
      break;
    case ('gcd'):
      for (let i = 0; i < 3; i += 1) {
        randomPairOfNums = getRandomNumberPair();
        rightAnswer = findGcd(randomPairOfNums);
        question = `${car(randomPairOfNums)} ${cdr(randomPairOfNums)}`;
        questionsAndAnswers[i] = createQuestionAndAnswerPair(question, String(rightAnswer));
      }
      break;
    case ('prime'):
      for (let i = 0; i < 3; i += 1) {
        numberForCheck = getRandomNumber();
        rightAnswer = isPrime(numberForCheck);
        question = `${numberForCheck}`;
        questionsAndAnswers[i] = createQuestionAndAnswerPair(question, rightAnswer);
      }
      break;
    case ('progression'):
      for (let i = 0; i < 3; i += 1) {
        const firstNumberOfProgression = getRandomNumber();
        const difference = getRandomNumber();
        const missingIndex = Math.floor(Math.random() * 10 + 1);
        rightAnswer = firstNumberOfProgression + difference * (missingIndex - 1);
        for (let j = 1; j < 11; j += 1) {
          if (j === missingIndex) question += '.. ';
          else question += `${firstNumberOfProgression + difference * (j - 1)} `;
        }
        questionsAndAnswers[i] = createQuestionAndAnswerPair(question, String(rightAnswer));
      }
      break;
    default: console.log('game not found');
      break;
  }
  return questionsAndAnswers;
};

export const startGame = (generatedData) => {
  let rightAnswerCounter = 0;
  for (let i = 0; i < generatedData.length; i += 1) {
    const userAnswer = readlineSync.question(`Question: ${car(generatedData[i])} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === (cdr(generatedData[i]))) {
      rightAnswerCounter += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${cdr(generatedData[i])}'`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (rightAnswerCounter === 3) console.log(`Congratulations, ${userName}!`);
};
export { car, cdr };
