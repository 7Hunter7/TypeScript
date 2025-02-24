// Задание 5. Community (часть 4)
/*
Что нужно сделать:
Доработайте проект из предыдущего задания. У вас уже есть два вида пользователей, и вы завели два разных типа для них. Более того, вы уже можете различать этих пользователей и типы в коде между собой. Но после того, как логику по определению типа вынесли в отдельные функции, снабдив типы дополнительным полем, всё сломалось. Сможете починить код проекта, который приведён ниже?
*/

/*
type User = {
type: 'user';
name: string;
age: number;
occupation: string;
}

type Admin = {
type: 'admin';
name: string;
age: number;
role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
{ type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
{ type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
{ type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
{ type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

export function isAdmin(person: Person) {
return person.type === 'admin';
}

export function isUser(person: Person) {
return person.type === 'user';
}

export function logPerson(person: Person) {
let additionalInformation: string = '';
if (isAdmin(person)) {
additionalInformation = person.role;
}
if (isUser(person)) {
additionalInformation = person.occupation;
}
console.log(- ${person.name}, ${person.age}, ${additionalInformation});
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
*/

// Решение:
type User = {
  type: "user";
  name: string;
  age: number;
  occupation: string;
};

type Admin = {
  type: "admin";
  name: string;
  age: number;
  role: string;
};

export type Person = User | Admin;

export const persons: Person[] = [
  {
    type: "user",
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  { type: "admin", name: "Jane Doe", age: 32, role: "Administrator" },
  { type: "user", name: "Kate Müller", age: 23, occupation: "Astronaut" },
  { type: "admin", name: "Bruce Willis", age: 64, role: "World saver" },
];

export function isAdmin(person: Person): person is Admin {
  return person.type === "admin";
}

export function isUser(person: Person): person is User {
  return person.type === "user";
}

export function logPerson(person: Person) {
  let additionalInformation: string = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log("Admins:");
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log("Users:");
persons.filter(isUser).forEach(logPerson);

// Изменения и объяснения:
/*
1) isAdmin и isUser как тайпгарды:
- Изменено объявление функций isAdmin и isUser так, чтобы они были полноценными тайпгардами.
- Теперь они имеют тип возвращаемого значения person is Admin и person is User соответственно. 
- Это говорит TypeScript, что если функция возвращает true, то переданный аргумент person должен рассматриваться как тип Admin или User соответственно.

2)  if в logPerson:
- В функции logPerson условие if необходимо, чтобы убедиться, что additionalInformation присваивается значение только одного из свойств role (для Admin) или occupation (для User). 
*/
