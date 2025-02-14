// Задание 6. Community (часть 1)
/*
Что нужно сделать:
- Сейчас вы начнёте выполнять проект, к доработке которого будете неоднократно возвращаться.
- Представьте, что создаёте небольшой проект для хранения разной информации о группе своих друзей. Так как проект небольшой, храните все данные прямо в коде, попутно разбираясь с возникающими проблемами. Ведь так вы сможете намного быстрее создавать новые фичи.
- У вас есть готовый код, сейчас нужно: определить тип User и использовать его в коде, избавиться от ошибок TypeScript и успешно пройти тесты.
*/
/*
export type User = unknown;

export const users: unknown[] = [
{
name: 'Roman Abramov',
age: 25,
occupation: 'Millionaire'
},
{
name: 'Andrey Fox',
age: 23,
occupation: 'Developer'
}
];

export function logPerson(user: unknown) {
console.log(- ${user.name}, ${user.age});
}

console.log('Users:');
users.forEach(logPerson);
*/

// Решение:
export type User = {
  name: string;
  age: number;
  occupation: string;
};

export const users: User[] = [
  {
    name: "Roman Abramov",
    age: 25,
    occupation: "Millionaire",
  },
  {
    name: "Andrey Fox",
    age: 23,
    occupation: "Developer",
  },
];

export function logPerson(user: User) {
  console.log(`- ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);

// Разъяснения:
/*
1) Определение типа User:
- Вместо unknown, мы создали интерфейс User с конкретными типами для каждого свойства:

name: string
age: number
occupation: string

2) Типизация массива users:
- Вместо unknown[], users теперь имеет тип User[], что означает “массив объектов типа User”. Это гарантирует, что каждый элемент массива соответствует структуре, определенной интерфейсом User.

3) Типизация параметра user в logPerson:
- Вместо unknown, параметр user функции logPerson теперь имеет тип User. Это позволяет TypeScript проверять, что функция получает объект с ожидаемыми свойствами (name и age).

4) В итоге:
- Определен тип User, и он используется для типизации массива users и параметра user в функции logPerson.
- Благодаря правильной типизации, TypeScript больше не выдает ошибок.
- Теперь TypeScript может проверять, что код использует объекты User правильно.
- Если попытаться добавить объект с неправильными свойствами в массив users или передать неправильный объект в функцию logPerson, TypeScript выдаст ошибку.
*/
