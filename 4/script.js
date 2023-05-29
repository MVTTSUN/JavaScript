// 1
for (let i = 0; i < 11; i++) {
  let string = '';

  if (i === 0) {
    string = 'это ноль';
  } else if (i % 2 === 0) {
    string = 'четное число';
  } else string = 'нечетное число';

  console.log(`${i} - ${string}`);
}

// 2
const arrTwo = [1, 2, 3, 4, 5, 6, 7];

arrTwo.splice(3, 2);
console.log(arrTwo);

//  3
const arrThree = [];
let isNumberThree = false;
let sumArr = 0;

for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 10);
  arrThree.push(randomNumber);
  sumArr += randomNumber;
  if (!isNumberThree) isNumberThree = randomNumber === 3;
}

console.log(arrThree, sumArr, Math.min(...arrThree), isNumberThree ? 'есть число 3' : 'нет числа 3');

// 4
let string = '';
for (let i = 0; i < 20; i++) {
  for (let j = 0; j < i + 1; j++) {
    string += 'x';
  }
  string += '\n';
}

console.log(string);