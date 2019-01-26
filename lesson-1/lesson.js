// Переменные, которые нужны
let a = 0;
console.log(a);

// Стрелочная функция не имеет контакта вызова, 
// она вызывает родителя
let obj = {
   number: 5,
   sayNumber: function() {
      say = () => {
         console.log(this)
      }
      say();
   }
}
obj.sayNumber();

// Трансформация данных
// фильтр - перебивает данные и выбирает нужные
let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
let shortNames = names.filter((name) => {
   return name.length < 5;
});
console.log(shortNames);

// Трансформация данных
// мэп - перебирает и трансформирует миссив в новом стиле
let answers = ['IvAn', 'AnnA', 'heLLo'];
answers = answers.map((item) => item.toLowerCase());
console.log(answers);

// Интерполяция - жизнь без конкатинации
console.log(`Пользователь ${name}, ${age} лет`);

// Значение по умолчанию при переменных
// Параметры по умолчанию
function fetchData (data, count = 0) {
   console.log(`Данные: ${data} в количестве ${count}`);
}
fetchData('something');

// REST-оператор - 
// сворачивает элементы в один массив
function max (...numbers) {
   console.log(numbers);
}
max(3, 4, 67, 97);

function max(a, b, ...numbers) {
   console.log(numbers);
}
max(3, 4, 67, 97);

// SPRED-оператор
// разворачивает массив на список элемнетов
const arr1 = [1, 2, 5],
      arr2 = [43, 2, 6];
const res = Math.max(...arr1, 300, ...arr2);
console.log(res);
console.log(...arr1, ...arr2)

// REST-оператор в объектах
const avatar = 'Photo';
const user = {
   name: 'default',
   pass: 'qwerty',
   rigths: 'user'
};
const admin = {
   name: 'admin',
   pass: 'root'
}
// const res = Object.assign({}, user, admin);
const res = {...user, ...admin, avatar};
console.log(res);

// Сокращение в записи значений свойства объекта
const x = 25, y = 10;
// const coords = {
//    x: x,
//    y: y,
//    calcSq: function () {
//       console.log(this.x*this.y)
//    }
// }
// coords.calcSq();
const coords = {x, y,
   calcSq(){
      console.log(this.x*this.y);
   }
}
coords.calcSq();
console.log(coords);

// Деструктиризация
const user = {
   name: {
      first: 'Sam',
      second: 'Smith'
   },
   pass: 'qwerty',
   rigths: 'user'
};
// const userName = user.name;
//user.name.first;
const {name: {first, second}, pass, rigths} = user;
console.log(first, second);

// Деструктиризиция для объектов
function connect({
   host = 'localhost',
   port = 3000,
   user = 'default'} = {}) {
      console.log(`host: ${host}, port: ${port}, user: ${user}`);
}
connect({
   port: 232
});
connect();

//Деструктиризация для массивов
const numbers = [3, 5, 6, 8];
const [a, b, c] = numbers;
console.log(a,b,c);

const numbers = [[3, 5], [6, 6]];
// numbers[0][0];
const [[a, b], [c, d]] = numbers;

const country = {
   name: 'England',
   population: 2000000,
   gender: {
      male: ['15%', '40%'],
      female: ['16%', '29%']
   }
}
// country.gender.make[0];
const {gender: {male: [maleUnder18, maleAdult], female: [femUnder18, femAdult]}} = country;
console.log(maleUnder18, femAdult);