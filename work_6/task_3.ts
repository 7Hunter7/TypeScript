// Задание 3. Omit, Readonly
/*
Что нужно сделать:
Реализуйте тип MyReadonly<T, K>, который принимает два аргумента T и K, где K — набор полей из T, которые необходимо сделать readonly. Когда K не передано, MyReadonly должен делать readonly все поля из типа T как встроенный тип Readonly<T>.
*/

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

/*
Советы и рекомендации:
Вы можете использовать Readonly, Omit и Pick из стандартной библиотеки типов TypeScript. Omit и Pick помогут вам разделить тип на несколько частей. А Readonly поможет сделать все поля в одном из получившихся типов как readonly. Не забудьте объединить все обратно, чтобы получить необходимый тип.
*/