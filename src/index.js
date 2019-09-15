import readlineSync from 'readline-sync';
import {
  car, cdr, greetUser, gameDescription,
} from './utils';

export default (generatedData, gameName) => {
  gameDescription(gameName);
  const userName = greetUser();
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
