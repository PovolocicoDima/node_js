const { add } = require('./add.js');
const { multiply } = require('./multiply.js');

const nodePath = process.argv[0];
const appPath = process.argv[1];
const firstNumber = process.argv[2];
const secondNumber = process.argv[3];
const action = process.argv[4];

action === 'add' ? add(firstNumber, secondNumber) : multiply(firstNumber, secondNumber)