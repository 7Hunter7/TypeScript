// Задание 1. Pick, Exclude
/*
Что нужно сделать:
Реализуйте встроенный утилитарный тип Omit<T, K>, не используя его. Omit<T, K> создаёт тип со всеми полями из T, но не включает в этот тип поля K.
*/
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
/*
Советы и рекомендации:
Для выполнения задания рекомендуем освежить в памяти такие операторы, как extends и keyof, а также такие утилитарные типы, как Pick и Exclude.
*/
