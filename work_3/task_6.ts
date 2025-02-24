// Дополнительное задание: Community (часть 5)
/*
Что нужно сделать:
- В том же проекте коллега написал классную функцию, которая поможет вам гибко фильтровать пользователей. Вы передаёте «критерий» и возвращаете только тех пользователей, которые подходят по всем критериям.
- Пока фильтруются только пользователи, а администраторы нет. -TypeScript опять что-то не нравится, ваш коллега просит помощи. Поправите его код?
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
{
type: 'admin',
name: 'Jane Doe',
age: 32,
role: 'Administrator'
},
{
type: 'user',
name: 'Kate Müller',
age: 23,
occupation: 'Astronaut'
},
{
type: 'admin',
name: 'Bruce Willis',
age: 64,
role: 'World saver'
},
{
type: 'user',
name: 'Wilson',
age: 23,
occupation: 'Ball'
},
{
type: 'admin',
name: 'Agent Smith',
age: 23,
role: 'Administrator'
}
];

export const isAdmin = (person: Person): person is Admin => person.type === 'admin';
export const isUser = (person: Person): person is User => person.type === 'user';

export function logPerson(person: Person) {
let additionalInformation = '';
if (isAdmin(person)) {
additionalInformation = person.role;
}
if (isUser(person)) {
additionalInformation = person.occupation;
}
console.log(- ${person.name}, ${person.age}, ${additionalInformation});
}

export function filterUsers(persons: Person[], criteria: unknown): User[] {
return persons.filter(isUser).filter((user) => {
const criteriaKeys = Object.keys(criteria) as (keyof User)[];
return criteriaKeys.every((fieldName) => {
return user[fieldName] === criteria[fieldName];
});
});
}

console.log('Users of age 23:');

filterUsers(
persons,
{
age: 23
}
).forEach(logPerson);

// https://www.typescriptlang.org/docs/handbook/utility-types.html
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
  {
    type: "admin",
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    type: "user",
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    type: "admin",
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
  {
    type: "user",
    name: "Wilson",
    age: 23,
    occupation: "Ball",
  },
  {
    type: "admin",
    name: "Agent Smith",
    age: 23,
    role: "Administrator",
  },
];

export const isAdmin = (person: Person): person is Admin =>
  person.type === "admin";
export const isUser = (person: Person): person is User =>
  person.type === "user";

export function logPerson(person: Person) {
  let additionalInformation = "";
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  if (isUser(person)) {
    additionalInformation = person.occupation;
  }
  console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
}

type FilterCriteria = Partial<User | Admin>; // Объединение типов

export function filterPersons(
  persons: Person[],
  criteria: FilterCriteria
): Person[] {
  return persons.filter((person) => {
    for (const key in criteria) {
      if (criteria.hasOwnProperty.call(person, key)) {
        if (person[key] !== criteria[key]) {
          return false;
        }
      }
    }
    return true;
  });
}

console.log("Users of age 23:");

filterPersons(persons, {
  age: 23,
}).forEach(logPerson);

// Изменения и объяснения:
/*
1) filterPersons вместо filterUsers: 
- Переименовал функцию filterUsers в filterPersons, так как теперь она должна фильтровать как пользователей, так и администраторов.

2) FilterCriteria:
- Создал тип FilterCriteria как Partial<User & Admin>;
- FilterCriteria позволяет указывать критерии фильтрации, которые могут содержать свойства как из User, так и из Admin;
- User & Admin создает пересечение типов User и Admin, что означает, что критерии фильтрации могут содержать любые свойства, которые есть либо в User, либо в Admin;
- Partial<> делает все свойства в объединенном типе опциональными, так как критерии фильтрации не обязаны содержать все возможные свойства.

3) Тип criteria в filterPersons: 
- Изменил тип параметра criteria в функции filterPersons на FilterCriteria.
Это позволяет передавать объекты с любыми свойствами, которые есть в User или Admin, в качестве критериев фильтрации.

4) Возвращаемый тип filterPersons:
- Изменил тип возвращаемого значения функции filterPersons на Person[];
- Функция filterPersons теперь может фильтровать массив Person[], возвращая подмножество, которое удовлетворяет заданным критериям, независимо от того, являются ли они пользователями или администраторами.

5) Обработка строк/чисел/булевых значений: 
- Если бы нужно было обрабатывать разные типы данных, то внутри filterPersons можно было бы использовать typeof для определения типа поля и соответствующей обработки.

6) Дополнительные замечания:
- В данном случае, не было необходимости использовать enum вместо строковых литералов для type, поскольку это упрощает чтение данных (удобнее видеть ‘user’ или ‘admin’ прямо в данных) и не вносит существенных проблем с рефакторингом (особенно с учетом поддержки TypeScript в современных IDE).
- Использование тайпгардов isAdmin и isUser по-прежнему рекомендуется для проверки типа Person в других частях кода, где это необходимо.
*/

// Альтернативное решение (упрощенное):
/*
type FilterCriteria = Partial<
  Pick<User, keyof User> & Pick<Admin, keyof Admin>
>;

export function filterPersons(
  persons: Person[],
  criteria: FilterCriteria
): Person[] {
  return persons.filter((person) => {
    for (const key in criteria) {
      if (criteria.hasOwnProperty(key)) {
        if (person[key] !== criteria[key]) {
          return false;
        }
      }
    }
    return true;
  });
}
*/

// Альтернативное решение (с использованием in):
/*
type FilterCriteria = Partial<User | Admin>;

export function filterPersons(
  persons: Person[],
  criteria: FilterCriteria
): Person[] {
  return persons.filter((person) => {
    for (const key in criteria) {
      if (criteria.hasOwnProperty(key)) {
        if (key in person && person[key] !== criteria[key]) {
          return false;
        }
      }
    }
    return true;
  });
}
*/

/*
Этот код использует Partial<User | Admin>. Так же, чтобы избежать ошибок, связанных с отсутствием свойства в типе Person, была добавлена проверка key in person.

В целом, Partial<User> & Partial<Admin> лучшее решение, так как оно позволяет четко указать, что мы можем фильтровать по свойствам, которые есть либо в User, либо в Admin.

Примечания: 
1) Вместо Partial<User> & Partial<Admin> можно использовать Partial<User | Admin>. Это объединит типы и позволит избежать лишнего пересечения.
2) В TypeScript for...in по умолчанию может перечислять все свойства, включая те, что находятся в прототипах. Лучше использовать Object.hasOwnProperty.call(person, key), чтобы избежать ошибок при использовании объектов с расширениями.
*/
