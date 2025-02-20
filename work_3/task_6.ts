// Дополнительное задание: Community (часть 5)
/*
Что нужно сделать:
- В том же проекте коллега написал классную функцию, которая поможет вам гибко фильтровать пользователей. Вы передаёте «критерий» и возвращаете только тех пользователей, которые подходят по всем критериям.
- Пока фильтруются только пользователи, а администраторы нет. -TypeScript опять что-то не нравится, ваш коллега просит помощи. Поправите его код?
*/

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

/*
Советы и рекомендации:
- Не используйте строковые литералы вместо enum, в будущем их сложно изменить. Придётся пройтись по коду и переименовать их вручную. Или довериться рефакторингу IDE, который по ряду причин может отработать неправильно. В случае с enum вы не будете иметь подобных проблем, а вносить изменения в код будет проще.
- Избегайте приведение типов с помощью as, используйте пользовательские тайпгарды для проверки типов по полю type. Пример реализации вы можете найти в задании 2.
*/