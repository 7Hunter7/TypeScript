// Задание 1. Pick, Exclude
/*
Что нужно сделать:
Реализуйте встроенный утилитарный тип Omit<T, K>, не используя его. Omit<T, K> создаёт тип со всеми полями из T, но не включает в этот тип поля K.
*/
/*
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
*/
/*
Советы и рекомендации:
Для выполнения задания рекомендуем освежить в памяти такие операторы, как extends и keyof, а также такие утилитарные типы, как Pick и Exclude.
*/

// Решение:
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Реализация Omit<T, K> с использованием Pick и Exclude
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

// Демонстрация работы MyOmit
const todo2: MyOmit<Todo, "description"> = {
  title: "Learn TypeScript",
  completed: false,
};

console.log(todo); // { completed: false }
console.log(todo2); // { title: 'Learn TypeScript', completed: false }

// Описание:

/*
1) MyOmit<T, K extends keyof T>:
- Определение условного типа с двумя дженериками: T (исходный тип) и K (ключи, которые нужно исключить);
- K extends keyof T - гарантирует, что K может быть только ключом из типа T. Это важное ограничение, чтобы избежать ошибок.
- MyOmit эффективно выбирает только те ключи из T, которые не входят в K. Это достигается путём исключения ключей из объединения keyof T с помощью Exclude, а затем выбора оставшихся ключей с помощью Pick.

2) Pick<T, Exclude<keyof T, K>>:
- Эта часть и является основной логикой MyOmit. Она состоит из двух утилитарных типов: Pick и Exclude.

3) keyof T: 
- Возвращает объединение всех ключей типа T в виде строковых литеральных типов;
- Например, для Todo это будет 'title' | 'description' | 'completed'.

4) Exclude<keyof T, K>: 
- Уутилитарный тип берёт объединение ключей keyof T и исключает из него ключи, указанные в K;
- Например, если K это 'description' | 'title', то Exclude<keyof T, K> вернёт 'completed'.

5) Pick<T, Exclude<keyof T, K>>:
- Теперь Pick получает исходный тип T (в нашем случае Todo) и объединение ключей, которые остались после исключения (в нашем случае 'completed');
- Pick создаёт новый тип, который содержит только указанные ключи из T;
- В результате получается тип, содержащий только поле completed.

6) Пример:
- В примере TodoPreview тип определён как MyOmit<Todo, 'description' | 'title'>. Это означает, что мы берём тип Todo и исключаем из него поля description и title. В результате TodoPreview будет содержать только поле completed. Пример константы todo демонстрирует, что тип TodoPreview действительно требует только поле completed.

7) Примечания:
- Тип K должен быть совместим с ключами типа T. TypeScript будет выдавать ошибку, если мы попытаемся исключить ключ, которого нет в T.
- MyOmit (и настоящий Omit) полезен, когда нужно создать новый тип на основе существующего, но с исключением некоторых полей. Это может  пригодится для создания DTO (Data Transfer Object), типов для API-ответов или для упрощения сложных типов.
*/
