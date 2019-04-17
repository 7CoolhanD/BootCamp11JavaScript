'use strict';
// =============================================Prototypes practice===========================
// const obj = {};
// const x = new Object();

// console.log(obj);
// console.log(x);


// const parent = {
//     parentProp: 'this is a parent prop',
//     a: 5,
// };

// // const child = {
// //     childProp: 'this is a child prop'
// // };

// // child.__proto__ = parent;
// // console.log(child.parentProp);

// const child = Object.create(parent);
// child.childProp = 'this is a child prop';

// console.log(child.hasOwnProperty('a'));
// console.log(child.a);


// const a = {
//     x: 5,
// };

// const b = Object.create(a);

// b.y = 10;

// const c = Object.create(b);

// console.log(c);
// c.hasOwnProperty('x');


// // ==================================================================== task 1 =================================================
// /*
//   Напиши функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email. 
  
//   В prototype функции-конструктора добавь метод getInfo(), 
//   который выводит в консоль значения полей login и email. 
  
//   Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
// */

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function() {
//     console.log(`login: ${this.login}, email: ${this.email}`);
// };

// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// // ==================================================================== task 2 ==================================================
// /*
//   Напиши ES6 класс StringBuilder.
  
//   На вход (в конструкторе) он получает один параметр string - строку,
//   которую записывает в свойство _value.
  
//   Добавь классу следующие методы:
  
//     - геттер value - возвращает текущее значение поля _value
  
//     - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
//     - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
//     - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// */

// function StringBuilder (string = " ") {
//     this.value = string;
    
//     StringBuilder.prototype.getValue = function() {
//         console.log(this.value);    
//     };

//     StringBuilder.prototype.append = function (str) {
//         builder.value = `${builder.value}${str}`;
//     };

//     StringBuilder.prototype.prepend = function (str) {
//         builder.value = `${str}${builder.value}`;
//     };

//     StringBuilder.prototype.pad = function (str) {
//         builder.value = `${str}${builder.value}${str}`;
//     };
// };

// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='
// // ==================================================================== task 3 ==================================================
// /*
//  * Напиши класс Car с указанными свойствами и методами
// */

// class Car {
//     constructor({ maxSpeed = 0 }) {
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
//     }
  
//     turnOn() {
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//     }
  
//     turnOff() {
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//     }
  
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//     }
  
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//     }
//   }
  
//   const car = new Car({ maxSpeed: 100 });
  

// // ==================================================================== task 4 ==================================================
// /*
// * Добавь к классу Car из предыдущего задания статический
// * метод getSpecs, который принимает объект-машину как параметр
// * и выводит в консоль значения полей maxSpeed, speed, running и distance.
// */

// const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

// // ==================================================================== task 5 ==================================================
// /*
// * Добавь классу Car свойство цены автомобиля, назови его сам.
// * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
// */

// const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car.value); // 2000

// car.value = 4000;
// console.log(car.value); // 4000

// // ==================================================================== task 6 ==================================================



