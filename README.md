# В этом репозитории собраны решения задач по TypeScript!

## Определение TypeScript и его роль в веб-разработке

TypeScript представляет собой современный язык программирования, разработанный Microsoft, который расширяет возможности JavaScript, добавляя статическую типизацию и другие новые функции.
В веб-разработке TypeScript становится всё более популярным выбором, обеспечивая разработчикам инструменты для более эффективной и надежной работы с кодом.

### Зачем использовать TypeScript вместо чистого JavaScript

Одним из ключевых вопросов, перед которым сталкиваются разработчики, является необходимость в использовании TypeScript вместо традиционного JavaScript.
TypeScript предоставляет преимущества статической типизации, что уменьшает количество ошибок во время выполнения кода и улучшает понимание структуры приложения.
Кроме того, TypeScript поддерживает новые возможности ECMAScript, обеспечивая современные средства разработки.

### Ключевые особенности языка

Важно понять, что TypeScript не является полностью отдельным языком, а скорее надстройкой над JavaScript.
Ключевой особенностью TypeScript является его система статической типизации, которая позволяет определять типы переменных, функций и объектов на этапе написания кода.
Это существенно улучшает предсказуемость и облегчает сопровождение кода.

## Основы TypeScript

Типы данных в TypeScript: примитивные и пользовательские:
Примитивные типы включают number для числовых значений, string для строковых значений, boolean для логических значений, null и undefined для представления отсутствующих значений,
symbol для уникальных идентификаторов, и bigint для целых чисел произвольной длины.

### Объявление переменных с явным указанием типов

Одним из ключевых преимуществ TypeScript является возможность явного указания типов переменных. Это улучшает читаемость кода и обеспечивает дополнительный уровень безопасности.

```bash
let age: number = 25;
let name: string = 'John';
let isActive: boolean = true;
```

TypeScript позволяет создавать пользовательские типы данных.

```bash
type Point = {
  x: number;
  y: number;
};
let coordinates: Point = {x: 10, y: 20};
```

### Работа с функциями и объектами

В TypeScript, определение типов параметров и возвращаемых значений функций является важной частью обеспечения надежности и понимания кода.

```bash
// Объявление функции с явными типами параметров и возвращаемого значения
function addNumbers(a: number, b: number): number {
  return a + b;
}
// Использование функции
let result: number = addNumbers(10, 5);
console.log(result); // Вывод: 15
```

Явное указание типов для параметров и возвращаемого значения является мощным инструментом для предотвращения ошибок, особенно в более крупных проектах. Кроме того, это улучшает автодокументирование кода, делая его более понятным для других разработчиков.

### Использование оператора as

- Использование оператора `as` (type assertion) в TypeScript может быть полезным в некоторых случаях, но его следует использовать с осторожностью. `as` позволяет разработчику переопределить тип переменной, но при этом не происходит никакой проверки на совместимость типов. Это может привести к ошибкам во время выполнения программы, если указанный тип не соответствует реальному типу переменной.

- Следует использовать правильные типы для переменных и гарантировать, что объекты инициализируются со всеми необходимыми свойствами. Это позволяет TypeScript выполнить проверку типов во время компиляции и гарантировать, что объект соответствует ожидаемому типу.

- В целом, понимание того, как работает система типов в TypeScript и как использовать ее правильно, помогает писать более надежный и безопасный код. Избегайте использования `as` без необходимости и всегда стремитесь к тому, чтобы TypeScript мог самостоятельно вывести типы ваших переменных.

### Использование Тайпгардов

- Тайпгард проверяет соответствие типу по заданным условиям.
  Обычный тайпгард реализуется с помощью условия `if` и операторов `typeof`, `in`, `instanceof`, операторов сравнения и так далее.

#### Пользовательский тайпгард

Пользовательский тайпгард — это специальная функция, которая типизируется с помощью типа `Argument is someType` и возвращает булевое значение. Если возвращается 'true', значит, результат соответствует типу `Argument is someType`. А если вернула 'false', то не соответствует. Пользовательский тайпгард пишется в случае, если требуется реализовать более сложную проверку типов.

## Использование интерфейсов

Интерфейсы - мощный механизм для описания структуры объектов.
Они позволяют задавать форму объекта, указывая типы свойств и их ожидаемые значения.

Пример использования интерфейса для объекта:

```bash
// Определение интерфейса для объекта "Person"
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}
// Использование интерфейса при объявлении объекта
let student: Person = {
  name: 'Alice',
  age: 20,
  isStudent: true,
};
// Функция, принимающая объект с определенной структурой
function printPerson(person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}, Student: ${person.isStudent}`);
}
// Вызов функции с объектом типа Person
printPerson(student);
```

Использование интерфейсов улучшает читаемость кода, упрощает сопровождение и обеспечивает статическую проверку типов.

### Наследование и расширение интерфейсов

Интерфейсы могут быть подвергнуты наследованию и расширению, что позволяет создавать более сложные иерархии типов. Наследование интерфейсов позволяет дочернему интерфейсу унаследовать свойства родительского, а расширение позволяет добавлять новые свойства к существующему интерфейсу без изменения оригинала.

Пример наследования и расширения интерфейсов:

```bash
// Базовый интерфейс "Shape"
interface Shape {
  color: string;
}
// Интерфейс "Circle" наследует "Shape" и добавляет свойство "radius"
interface Circle extends Shape {
  radius: number;
}
// Интерфейс "Rectangle" наследует "Shape" и добавляет свойства "width" и "height"
interface Rectangle extends Shape {
  width: number;
  height: number;
}
// Функция, принимающая объект с интерфейсом "Shape"
function draw(shape: Shape): void {
  console.log(`Drawing a ${shape.color} shape`);
}
// Создание объектов типа "Circle" и "Rectangle"
let myCircle: Circle = {color: 'blue', radius: 10};
let myRectangle: Rectangle = {color: 'red', width: 20, height: 30};
// Вызов функции с объектами разных интерфейсов
draw(myCircle); // Вывод: Drawing a blue shape
draw(myRectangle); // Вывод: Drawing a red shape
```

Наследование и расширение интерфейсов в TypeScript способствует созданию гибких и чистых иерархий типов в коде.
