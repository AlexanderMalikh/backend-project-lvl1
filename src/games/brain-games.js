#!/usr/bin/env node

import { greetUser } from '..';

export const gameDescription = () => {
  console.log('Welcome to the Brain Games!');
};

export default () => {
  gameDescription();
  greetUser();
};
