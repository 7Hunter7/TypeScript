// Задание 4. DeepReadonly
/*
Что нужно сделать:
- Реализуйте утилитарный тип DeepReadonly<T>, который делает readonly все поля типа T, а также поля всех его вложенных объектов.
- Подразумеваем, что мы работаем только с объектами. Массивы, функции, классы и так далее не учитываются в решении.
*/

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

/*
Советы и рекомендации:
Для выполнения задания рекомендуем освежить в памяти такие операторы, как extends и keyof, а также такие утилитарные типы, как Omit.
*/
