// Задание 1. Функции
/*
Что нужно сделать:
Стажёр из вашей команды передал вам часть кода, который нужно доработать. Этот код — реализация важного функционала: поиск старейшего элемента в массиве. Старейшего — это с наибольшим значением age (возраст), речь не про время добавления в массив.
*/

// Код стажёра:
/*
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
*/

/*
Однако в этой реализации допущена ошибка. Объекты похожи тем, что имеют поле age. Таким образом, получается дублирование кода. Также нет тестовых данных для проверки функционала.
Для выполнения этого задания необходимо:
Реализовать решение без дублирования кода с использованием дженериков.
«Замокать», а правильнее «застабать» (см. Stubs vs Mocks) тестовые данные для этих функций. Создайте хотя бы по три объекта каждого типа.
*/

// Решение:
// Определение общего интерфейса для объектов с возрастом
interface Ageable {
  age: number;
}

// Типы данных
interface Person extends Ageable {
  name: string;
}

interface Bridge extends Ageable {
  city: string;
}

interface Wine extends Ageable {
  manufacturer: string;
  grade: string;
}

// Универсальная функция для поиска старейшего элемента
function getOldest<T extends Ageable>(items: T[]): T | undefined {
  if (items.length === 0) {
    return undefined; // Обработка случая пустого массива
  }
  return items.sort((a, b) => b.age - a.age)[0];
}

// Тестовые данные:
const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 45 },
  { name: "Charlie", age: 25 },
];

const bridges: Bridge[] = [
  { city: "London", age: 150 },
  { city: "New York", age: 80 },
  { city: "San Francisco", age: 90 },
];

const wines: Wine[] = [
  { manufacturer: "Chateau Margaux", age: 50, grade: "Excellent" },
  { manufacturer: "Opus One", age: 30, grade: "Very Good" },
  { manufacturer: "Yellow Tail", age: 5, grade: "Good" },
];

// Проверка:
const oldestPerson = getOldest(people);
const oldestBridge = getOldest(bridges);
const oldestWine = getOldest(wines);

console.log("Oldest Person:", oldestPerson); // 'Oldest Person:', { name: 'Bob', age: 45 }
console.log("Oldest Bridge:", oldestBridge); // Oldest Bridge:', { city: 'London', age: 150 }
console.log("Oldest Wine:", oldestWine); // 'Oldest Wine:', { manufacturer: 'Chateau Margaux', age: 50, grade: 'Excellent' }

// Дополнительно (с пустым массивом)
const emptyPeople: Person[] = [];
const oldestFromEmpty = getOldest(emptyPeople);
console.log("Oldest from Empty Array:", oldestFromEmpty); // 'Oldest from Empty Array:', undefined

// Описание:
/*
1) interface Ageable:
- Определяем интерфейс Ageable, содержащий только свойство age с типом number;
- Теперь код легче поддерживается, поскольку вся информация о возрасте находится в одном месте;
- Это позволяет функции getOldest работать с любым типом объекта, у которого есть возраст.

2) interface Person extends Ageable { name: string; }:
- Создаем интерфейс Person, который наследуется от Ageable (свойство age с типом number) и добавляет свойство name.
- Аналогично для Bridge и Wine.

3) function getOldest - Создаем дженерик-функцию:
- T extends Ageable означает, что T может быть любым типом, который реализует интерфейс Ageable. То есть, он должен иметь свойство age типа number;
- items: T[] - функция принимает массив объектов типа T;
- T | undefined - функция возвращает либо объект типа T, либо undefined (в случае, если массив пуст);
- if (items.length === 0) { return undefined; } - Проверка на пустой массив. Это делает функцию более надежной. Возврат undefined позволяет вызывающему коду обработать ситуацию, когда нет данных для поиска старейшего;
- items.sort((a, b) => b.age - a.age)[0] - сортирует массив по убыванию возраста и возвращает первый элемент (самый старый).

4) Тестовые данные:
- Создаем массивы people, bridges, и wines с тестовыми данными.

5) Проверка:
- Вызывается функция getOldest для каждого массива.
- Результаты выводятся в консоль.
- Добавлен тест с пустым массивом, чтобы проверить обработку крайнего случая.

6) Преимущества использования интерфейсов и дженериков в данной задаче:
- Использование интерфейсов: Интерфейсы в TypeScript обычно лучше подходят для определения структуры объектов, особенно если мы планируем расширять эти типы в будущем. Они более декларативны и TypeScript часто предоставляет более полезные сообщения об ошибках при работе с интерфейсами.
- Уменьшение дублирования кода: Одна функция getOldest заменяет три отдельные функции.
- Типовая безопасность: TypeScript обеспечивает проверку типов во время компиляции. Если мы случайно передадим в getOldest массив объектов, у которых нет свойства age, TypeScript выдаст ошибку.
- Гибкость: getOldest может работать с любым типом объекта, у которого есть свойство age.
- Читаемость: Код становится более лаконичным и понятным.

7) Примечание: 
- Метод sort() изменяет переданный массив, что может привести к неожиданным багам в других частях программы.
- Создавайте копию массива [...items] или slice
return items.slice().sort((a, b) => b.age - a.age)[0];

- Если объекты не изменяются после создания, свойства должны быть readonly

- Можно еще подумать и ответить на вопросы:
а) Почему проверяется undefined, а не null?
б) Почему не проверяется случай, когда все объекты имеют одинаковый age?

- Можно sort заменить на reduce
*/
