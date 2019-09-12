import {
  greetUser, startGame,
  gameDescription, generateGameData,
} from '..';

export default () => {
  gameDescription('gcd');
  greetUser();
  startGame(generateGameData('gcd'));
};
