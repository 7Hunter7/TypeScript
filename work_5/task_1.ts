// Задание 1. Функции
/*
Что нужно сделать:
Стажёр из вашей команды передал вам часть кода, который нужно доработать. Этот код — реализация важного функционала: поиск старейшего элемента в массиве. Старейшего — это с наибольшим значением age (возраст), речь не про время добавления в массив.
*/

// Код стажёра:
type Person = {
  name: string;
  age: number;
};

type Bridge = {
  city: string;
  age: number;
};

type Wine = {
  manufacturer: string;
  age: number;
  grade: string;
};

function getOldestPerson(items: Person[]): Person {
  return items.sort((a, b) => b.age - a.age)[0];
}

function getOldestWine(items: Wine[]): Wine {
  return items.sort((a, b) => b.age - a.age)[0];
}

function getOldestBridge(items: Bridge[]): Bridge {
  return items.sort((a, b) => b.age - a.age)[0];
}

/*
Однако в этой реализации допущена ошибка. Объекты похожи тем, что имеют поле age. Таким образом, получается дублирование кода. Также нет тестовых данных для проверки функционала.
Для выполнения этого задания необходимо:
Реализовать решение без дублирования кода с использованием дженериков.
«Замокать», а правильнее «застабать» (см. Stubs vs Mocks) тестовые данные для этих функций. Создайте хотя бы по три объекта каждого типа.
*/
