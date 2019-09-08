#!/usr/bin/env node

import readlineSync from 'readline-sync'; 

const greetUser = () => {
	const userName = readlineSync.question('May i have your name?');
	console.log(`Hello, ${userName}`);
}; 

export { greetUser };
