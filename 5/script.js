// 1
const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
}

for (const key in numbers) {
  numbers[key] >= 3 && console.log(numbers[key]);
}

// 2
const post = {
  author: 'John', // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: 'Alex',
      text: 'lorem ipsum',
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: 'Jane',
      text: 'lorem ipsum 2', // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

console.log(
  post.author,
  post.comments[0].rating.dislikes,
  post.comments[1].userId,
  post.comments[1].text
);

// 3
const productsThree = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

productsThree.forEach(({ price }) => price *= 0.85);

console.log(productsThree);

// 4
const productsFour = [
  {
    id: 3,
    price: 127,
    photos: [
      '1.jpg',
      '2.jpg',
    ],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: [
      '3.jpg',
    ],
  },
  {
    id: 8,
    price: 78,
  },
];

console.log(productsFour.filter(({ photos }) => photos && photos.length));
console.log(productsFour.sort((a, b) => a.price - b.price));

// 5
const en = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

console.log(en.reduce((acc, el, i) => (acc[el] = ru[i], acc), {}));