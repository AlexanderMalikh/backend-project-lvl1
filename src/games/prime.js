import {
  greetUser, startGame,
  gameDescription, generateGameData,
} from '..';

export default () => {
  gameDescription('prime');
  greetUser();
  startGame(generateGameData('prime'));
};
