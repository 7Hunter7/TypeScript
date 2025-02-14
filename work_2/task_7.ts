// Задание 7. Community (часть 2)
/*
Что нужно сделать:
В этом задании нужно доработать код, чтобы раздать роль администратора всем, кто хочет помочь наполнять комьюнити фичами.
Для этого можно ввести новый тип данных Admin, который будет содержать поля name, age и role. Затем нужно обновить массив persons таким образом, чтобы он мог хранить объекты типов User и Admin. Также нужно обновить функцию logPerson, чтобы она могла выводить в консоль информацию о пользователях с ролью администратора.
*/
/*
Используйте пример кода ниже, чтобы осуществить доработки:

type User = {
name: string;
age: number;
occupation: string;
}

type Admin = {
name: string;
age: number;
role: string;
}

export type Person = unknown; 

export const persons: User[] = [
{
name: 'Roman Abramov',
age: 25,
occupation: 'Millionaire'
},
{
name: 'Jane Doe',
age: 32,
role: 'Administrator'
},
{
name: 'Andrey Fox',
age: 23,
occupation: 'Developer'
}
{
name: 'Bruce Willis',
age: 64,
role: 'World saver'
}
];

export function logPerson(user: User) {
console.log(- ${user.name}, ${user.age});
}

persons.forEach(logPerson);.
*/

// Решение:
type User = {
  name: string;
  age: number;
  occupation: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

export type Person = User | Admin;

export const persons: Person[] = [
  {
    name: "Roman Abramov",
    age: 25,
    occupation: "Millionaire",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Andrey Fox",
    age: 23,
    occupation: "Developer",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

export function logPerson(person: Person) {
  console.log(`- ${person.name}, ${person.age}`);
  if ("role" in person) {
    console.log(`  Role: ${person.role}`);
  }
}

console.log("Persons:");
persons.forEach(logPerson);

// Разъяснения:
/*
1) Тип Person:
- export type Person = User | Admin; - Определяем тип Person как объединение типов User и Admin. Это означает, что переменная типа Person может содержать либо объект типа User, либо объект типа Admin. Тип Person экспортируется.

2) Массив persons:
- export const persons: Person[] = [...] - Массив persons теперь имеет тип Person[], что означает, что он может содержать объекты как типа User, так и типа Admin. Массив persons экспортируется.

3) Функция logPerson:
- export function logPerson(person: Person) { ... } - Функция logPerson теперь принимает аргумент типа Person, что позволяет ей обрабатывать как пользователей, так и администраторов.
- if ('role' in person) { ... } - Внутри функции logPerson добавлена проверка if ('role' in person). Это type guard, который проверяет, существует ли свойство role в объекте person. Если свойство role существует, значит, объект является администратором (или содержит роль), и выводится информация о роли. Этот код обеспечивает типобезопасность, так как TypeScript будет считать, что внутри блока if переменная person имеет тип, включающий свойство role. В данном случае это Admin (или тип, который имеет свойство role). Если этого не сделать TypeScript выдаст ошибку, что у user нет свойства role.
*/
