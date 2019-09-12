import {
  greetUser, startGame,
  gameDescription, generateGameData,
} from '..';

export default () => {
  gameDescription('even');
  greetUser();
  startGame(generateGameData('even'));
};
