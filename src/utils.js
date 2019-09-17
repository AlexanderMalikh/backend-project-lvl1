import { cons, car, cdr } from '@hexlet/pairs';

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { cons, car, cdr };
