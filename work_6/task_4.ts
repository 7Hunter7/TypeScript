// Задание 4. DeepReadonly
/*
Что нужно сделать:
- Реализуйте утилитарный тип DeepReadonly<T>, который делает readonly все поля типа T, а также поля всех его вложенных объектов.
- Подразумеваем, что мы работаем только с объектами. Массивы, функции, классы и так далее не учитываются в решении.
*/
/*
type X = {
  x: {
    a: 1;
    b: "hi";
    z: string;
  };
  y: string;
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

type Todo = DeepReadonly<X>; // should be same as Expected

const test: Todo = {
  x: {
    a: 1,
    b: "hi",
    z: "try change me too",
  },
  y: "try change me",
};

test.y = "changed"; // Error
test.x.z = "changed"; // Error
*/
/*
Советы и рекомендации:
Для выполнения задания рекомендуем освежить в памяти такие операторы, как extends и keyof, а также такие утилитарные типы, как Omit.
*/

// Решение:
type X = {
  x: {
    a: 1;
    b: "hi";
    z: string;
  };
  y: string;
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
    readonly z: string;
  };
  readonly y: string;
};

// Реализация DeepReadonly<T>
type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;

type Todo2 = DeepReadonly<X>; // должен быть таким же, как и ожидаемый

const test: Todo2 = {
  x: {
    a: 1,
    b: "hi",
    z: "try change me too",
  },
  y: "try change me",
};

// Примеры (закомментированы, чтобы избежать ошибок компиляции):
// test.y = 'changed'; // Error: cannot reassign a readonly property
// test.x.z = 'changed'; // Error: cannot reassign a readonly property
// test.x.a = 2; // Error: cannot reassign a readonly property

console.log(test); // { x: { a: 1, b: 'hi', z: 'try change me too' }, y: 'try change me' }

// Описание:
/*
1) type DeepReadonly<T>:
- Определяет рекурсивный условный тип с одним дженериком: T (исходный тип).

2) T extends object ? ... : T:
- Условный тип, который проверяет, является ли T объектом.
- T extends object - проверяет, является ли T типом object. В TypeScript object представляет любой не-примитивный тип (т.е., все, кроме string, number, boolean, symbol, null, undefined). Важно отметить, что массивы тоже являются объектами в TypeScript.
- Если T является объектом, то выполняется следующая часть типа: { readonly [K in keyof T]: DeepReadonly<T[K]> }.
- Если T не является объектом (т.е., это примитивный тип), то тип возвращает T без изменений. Это базовый случай для рекурсии, когда достигается примитивное значение.

3) { readonly [K in keyof T]: DeepReadonly<T[K]> }:
- mapped type, который итерирует по ключам объекта T;
- readonly [K in keyof T] -делает каждое поле с ключом K readonly.
- DeepReadonly<T[K]> - рекурсивно применяет DeepReadonly к типу значения каждого поля (T[K]). - Это означает, что если значение поля само является объектом, то DeepReadonly будет применен и к нему, делая его поля тоже readonly, и так далее, пока не достигнет примитивных типов.

4) Пример:
- Для типа X, DeepReadonly сначала обрабатывает x и y;
- x - это объект, поэтому он становится readonly x: DeepReadonly<{ a: 1; b: 'hi'; z: string; }>;
- Затем DeepReadonly вызывается для { a: 1; b: 'hi'; z: string; };
- Здесь a, b и z становятся readonly, и поскольку их типы (1, 'hi', string) являются примитивными, рекурсия останавливается4
- y также становится readonly.

5) Примечания:
- Рекурсия: Ключевая концепция в DeepReadonly. Тип рекурсивно вызывает сам себя для обработки вложенных объектов.
- Условный тип: Используется для обработки разных случаев: объект или примитивное значение.
- Базовый случай: Рекурсия должна иметь базовый случай, чтобы остановиться. В данном случае базовым случаем является достижение примитивного типа.
- Mapped types: Используются для итерации по ключам объекта и применения модификаций (readonly) к каждому полю.
- Object type check: T extends object определяет, является ли тип объектом. Это позволяет избежать ошибок при попытке применить keyof к примитивным типам.

6) Замечания:
- В реализации используются только объекты, но тип object в TypeScript включает также массивы, функции, и другие объекты.
- Задание ограничивает работу исключительно с объектами, и этот момент не учтен.
- Решение заключается в том, чтобы исключить массивы и другие типы, отличные от объектов.
 */
