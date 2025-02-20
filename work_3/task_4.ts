// Задание 4. Community (часть 3)
/*
Что нужно сделать:
- Чтобы различать пользователей и администраторов, необходимо изменить функцию logPerson. Это позволит ей выводить соответствующую дополнительную информацию в зависимости от типа Person.
- Можно использовать условный оператор if, который проверяет, является ли объект типом Admin. И если да, то использовать значение свойства role. А в противном случае использовать значение свойства occupation.
- Вам необходимо модифицировать функцию logPerson:
*/

/*
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

export type Person = User | Admin;

export const persons: Person[] = [
{
name: 'Max Mustermann',
age: 25,
occupation: 'Chimney sweep'
},
{
name: 'Jane Doe',
age: 32,
role: 'Administrator'
},
{
name: 'Kate Müller',
age: 23,
occupation: 'Astronaut'
},
{
name: 'Bruce Willis',
age: 64,
role: 'World saver'
}
];

export function logPerson(person: Person) {
let additionalInformation: string;
if (person.role) {
additionalInformation = person.role;
} else {
additionalInformation = person.occupation;
}
console.log(- ${person.name}, ${person.age}, ${additionalInformation});
}

persons.forEach(logPerson);
*/
