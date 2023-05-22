// 1
const num1 = +prompt('Введите num1');
const num2 = +prompt('Введите num2');

console.log(num1 <= 1 && num2 >= 3);

//2
const test = true;

console.log(test === true ? '+++' : '---');

//3
const day = Math.floor(Math.random() * 31 + 1);

console.log(`Декада месяца: ${day === 31 ? 3 : Math.ceil(day / 10)}`);

//4
const num = +prompt('Введите число');

const one = num % 10;
const two = (num % 100 - one) / 10;
const three = (num % 1000 - num % 100) / 100;

console.log(`В числе ${num} количество сотен: ${three}, десятков: ${two}, единиц: ${one}`);