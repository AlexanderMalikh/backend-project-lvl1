import {
  greetUser, startGame,
  gameDescription, generateGameData,
} from '..';

export default () => {
  gameDescription('calc');
  greetUser();
  startGame(generateGameData('calc'));
};
