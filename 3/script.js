// 1
const getCubeNumber = (num) => num ** 3;

console.log(getCubeNumber(2), getCubeNumber(3));
// 2
const getSalary = (num) => console.log(!isNaN(num) ? `Размер заработной платы за вычетом налогов равен ${num - num * 0.13}` : 'Значение задано не верно');

getSalary(20000);

// 3
const numOne = +prompt('Первое число');
const numTwo = +prompt('Второе число');
const numThree = +prompt('Третье число');

const getMaxNumber = (numOne, numTwo, numThree) => Math.max(numOne, numTwo, numThree);

console.log(getMaxNumber(numOne, numTwo, numThree));

// 4
const getSum = (numOne, numThree) => numOne + numThree;
const getSub = (numOne, numThree) => Math.max(numOne, numThree) - Math.min(numOne, numThree);
const getMult = (numOne, numTwo) => numOne * numTwo;
const getDiv = (numOne, numTwo) => numOne / numTwo;

console.log(getSum(4, 7), getSub(3, 6), getMult(2, 5), getDiv(87, 3));