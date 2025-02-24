// Задание 3. Omit, Readonly
/*
Что нужно сделать:
Реализуйте тип MyReadonly<T, K>, который принимает два аргумента T и K, где K — набор полей из T, которые необходимо сделать readonly. Когда K не передано, MyReadonly должен делать readonly все поля из типа T как встроенный тип Readonly<T>.
*/
/*
type Todo {
title: string
description: string
completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
title: "Hey",
description: "foobar",
completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
*/
/*
Советы и рекомендации:
Вы можете использовать Readonly, Omit и Pick из стандартной библиотеки типов TypeScript. Omit и Pick помогут вам разделить тип на несколько частей. А Readonly поможет сделать все поля в одном из получившихся типов как readonly. Не забудьте объединить все обратно, чтобы получить необходимый тип.
*/

// Решение:
type Todo1 = {
  title: string;
  description: string;
  completed: boolean;
};

// Реализация MyReadonly2<T, K>
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & Omit<T, K>;

const todo1: MyReadonly2<Todo1, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// Примеры (закомментированы, чтобы не выдавать ошибки при компиляции):
// todo1.title = "Hello"; // Error: cannot reassign a readonly property
// todo1.description = "barFoo"; // Error: cannot reassign a readonly property

todo.completed = true; // OK

const todo3: MyReadonly2<Todo> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

//  Примеры:
// todo3.title = "Hello"; // Error: cannot reassign a readonly property
// todo3.description = "barFoo"; // Error: cannot reassign a readonly property
// todo3.completed = true; // Error: cannot reassign a readonly property

// Описание:
/*
1) type MyReadonly2<T, K extends keyof T = keyof T>:
- Определяет условный тип с двумя дженериками: T (исходный тип) и K (ключи, которые нужно сделать readonly);
- K extends keyof T = keyof T - ограничивает K ключами типа T; 
- = keyof T - задаёт значение по умолчанию для K равное keyof T. Это означает, что если K не указан, то все ключи в T будут сделаны readonly.
- Т.О.: MyReadonly2 берёт тип T, делает указанные поля K readonly, и затем объединяет это с типом, который содержит все остальные поля из T без изменений. Таким образом, результирующий тип содержит все поля из T, но поля, перечисленные в K, теперь помечены как readonly.

2) { readonly [P in K]: T[P]; }:
- mapped type, который итерирует по ключам, указанным в K;
- readonly [P in K] делает каждое поле с ключом P (из K) readonly;
- T[P] определяет тип каждого поля, основываясь на типе соответствующего поля в исходном типе T.

3) & Omit<T, K>:
- Использует пересечение типов (&) для объединения двух типов:
а) Тип, который делает поля K readonly.
б) Тип, который содержит все поля из T, кроме тех, что указаны в K (благодаря Omit). Это гарантирует, что поля, не указанные в K, останутся с их исходной модифицируемостью.

4) Пример:
- const todo1: MyReadonly2<Todo1, 'title' | 'description'> создаёт объект, где поля title и description являются readonly, а completed остаётся изменяемым.
- const todo3: MyReadonly2<Todo> создает объект, где все поля (title, description, completed) являются readonly.

5) Примечание:
- Использование keyof T = keyof T позволяет не указывать K при использовании типа, в этом случае все поля становятся readonly. Это соответствует поведению стандартного Readonly<T>.
- Использование & для пересечения типов - ключевой момент. Без него, тип просто перезаписал бы Todo с readonly полями title и description, а поле completed исчезло бы.
 */
