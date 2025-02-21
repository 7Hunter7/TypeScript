import { Person } from "./person";
import { Job } from "./job";

// Создание людей
const person1 = new Person("Alice");
const person2 = new Person("Bob");
const person3 = new Person("Charlie");

// Создание работ
const developerJob = new Job("Developer", 100000);
const designerJob = new Job("Designer", 80000);
const managerJob = new Job("Manager", 120000);

// Назначение первоначальных профессий
person1.setJob(developerJob);
person2.setJob(designerJob);
person3.setJob(managerJob);

// Заставляем их поработать
person1.work(); // Alice сейчас работает как Developer
person2.work(); // Bob сейчас работает как Designer
person3.work(); // Charlie сейчас работает как Manager

// Вывод зарплаты
console.log(`${person1.getName()} получает ${person1.getSalary()}`); // Alice получает 100000
console.log(`${person2.getName()} получает ${person2.getSalary()}`); // Bob получает 80000
console.log(`${person3.getName()} получает ${person3.getSalary()}`); // Charlie получает 120000

// Переквалификация
person1.setJob(managerJob);
person2.setJob(developerJob);

// Снова заставляем их поработать
person1.work(); // Alice сейчас работает как Manager
person2.work(); // Bob сейчас работает как Developer

// Вывод зарплаты
console.log(`${person1.getName()} получает ${person1.getSalary()}`); // Alice получает 120000
console.log(`${person2.getName()} получает ${person2.getSalary()}`); // Bob получает 100000

// Описание:
/*
1) Создание работ:
- Создаем экземпляры класса Person (Alice, Bob, Charlie).
2) Создание работ:
- Создаем экземпляры класса Job (developerJob, designerJob, managerJob).
3) Назначение первоначальных профессий:
- Назначаем первоначальные профессии сотрудникам с помощью метода setJob().
4) Заставляем их поработать:
- Вызываем метод work() для каждого сотрудника, чтобы показать, что они работают.

5) Вывод зарплаты:
- Выводим зарплату каждого сотрудника с помощью метода getSalary().

6) Переквалификация:
- Переквалифицируем сотрудников, меняя им профессии с помощью метода setJob().

7) Заставляем их поработать:
- Снова вызываем метод work() и выводим зарплату, чтобы показать, что поведение объектов изменилось.
*/
