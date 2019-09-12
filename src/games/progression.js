import {
  greetUser, startGame,
  generateGameData, gameDescription,
} from '..';

export default () => {
  gameDescription('progression');
  greetUser();
  startGame(generateGameData('progression'));
};
