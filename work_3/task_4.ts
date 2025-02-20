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
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

// Тайпгард для Admin
function isAdmin(person: Person): person is Admin {
  return "role" in person;
}

export function logPerson(person: Person) {
  let additionalInformation: string;
  if (isAdmin(person)) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(`- ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);

// Объяснения к коду:
/*
1) isAdmin(person: Person): person is Admin: 
- Создается пользовательский тайпгард isAdmin, который проверяет наличие свойства role в объекте person. 
- Если свойство role присутствует, функция возвращает true и сообщает TypeScript, что person имеет тип Admin в области видимости, где isAdmin возвращает true.

2) logPerson(person: Person):
- Использует тайпгард isAdmin для проверки, является ли person типом Admin.
- Если isAdmin(person) возвращает true, то additionalInformation присваивается значение свойства role.
- В противном случае (если person является User), additionalInformation присваивается значение свойства occupation.
- Выводит информацию о человеке в консоль.
*/

// Сопроводительный текст:
/*
1) Типобезопасность: 
Использование тайпгарда isAdmin гарантирует, что доступ к свойству role будет осуществляться только тогда, когда person действительно является типом Admin, что предотвращает потенциальные ошибки.

2) Читаемость: 
Код стал более читаемым благодаря использованию функции isAdmin, которая явно определяет, что делает проверка.

3) Расширяемость: 
Если в будущем потребуется добавить другие типы людей (например, “SuperAdmin” или “Guest”), можно легко расширить тайпгард isAdmin или создать новые тайпгарды для этих типов.

4) Избежание ошибок: 
Предыдущий код полагался на то, что если есть поле role, то это Admin, а если нет - User. Это может привести к ошибкам, если появится новый тип, который не является Admin, но при этом не имеет поля role. Использование тайпгарда делает код более надежным.
*/
