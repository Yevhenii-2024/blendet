// 'use strict' 
// const numbers = [1, 2, 3, 4, 5];

// const foo = numbers.map(number => number ** 2);

// console.log(foo);

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const foo = data.flatMap(number => number.values);

// console.log(foo);

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const foo = people.some(num => num.age < 20);

// console.log(foo);


// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const foo = numbers.every(num => num % 2 === 0);

// console.log(foo);

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
    
// const foo = numbers.find(num => num % 2 !== 0);

// console.log(foo);

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const foo = numbersArray.toSorted((a, b) => a - b);

// console.log(foo);


// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const foo = stringArray.toSorted((a, b) => a.localeCompare(b));

// console.log(foo);

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const foo = users.toSorted((a, b) => a.age - b.age);

// console.log(foo);


// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// const foo = user.filter(obj => obj.age > 20);

// console.log(foo);


// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const foo = numbers.reduce((total, num) => total + num, 0);

// console.log(foo);

 // Створи клас для калькулятора, який має такі методи:
 // - метод number, який набуває початкового значення для наступних операцій
 // - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 // - методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
// class Calculator {
//     constructor() {
//         this.value = 0;
//     }

//     num(firstValue) {
//         this.value = firstValue;
//         return this;
//     }

//     add(plus) {
//         this.value += plus;
//         return this;
//     }
    
//     substruct(minus) {
//         this.value -= minus;
//         return this;
//     }

//     multiply(num) {
//         this.value *= num;
//         return this;
//     }

//     divide(num) {
//         if (num === 0) {
//             console.log('Ділення на нуль не можливе');
//         }
//         this.value /= num;
//         return this;
//     }

//     getResult() {
//         return this.value;
//     }
// }

// const calc = new Calculator();
// const result = calc.num(10).add(5).substruct(3).multiply(4).divide(2).getResult();

// console.log(result);


  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // ##### Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю
  //та електронною поштою людини.
  
  //
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  //  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
// який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.gender = obj.gender;
        this.email = obj.email;
    }

    getDetails() {
        return ({
            name: this.name,
            age: this.age,
            gender: this.gender,
            email: this.email
        });
    }
}

class Employee extends Person {
    constructor(obj) {
        super(obj);
        this.salary = obj.salary;
        this.department = obj.department;
    }

    getEmployeeDetails() {
        return  {
            salary: this.salary,
            department: this.department
        };
    }
}

const employee = new Employee({
    name: "Євгеній",
    age: 28,
    gender: "чоловік",
    email: "yevhenii@example.com",
    salary: 50000,
    department: "IT"
});

console.log(employee.getDetails());
console.log(employee.getEmployeeDetails());
