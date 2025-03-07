// Задание 2. Простой собственный тип
/*
Что нужно сделать
Реализуйте утилитарный тип First<T> , который принимает в качестве аргумента массив и принимает значение первого элемента этого массива.
*/
/*
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
*/
/*
Советы и рекомендации:
Для выполнения задания рекомендуем освежить в памяти такие операторы, как extends и keyof, а также типизацию массива через spread-оператор, например type First<T extends any[]> = …
*/

// Решение:
type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

// Реализация First<T>
type First<T extends any[]> = T extends [] ? never : T[0];

type head1 = First<arr1>; // ожидается 'a'
type head2 = First<arr2>; // ожидается 3

// Пример с пустым массивом
type arr3 = [];
type head3 = First<arr3>; // ожидается never

console.log("head1:", {} as head1); // 'a'
console.log("head2:", {} as head2); // 3
console.log("head3:", {} as head3); // never

// Описание:
/*
1) type First<T extends any[]>:
- Определение условного типа с одним дженериком: T;
- T extends any[] означает, что T должен быть массивом любого типа (any). Это гарантирует, что тип работает только с массивами.

2) T extends [] ? never : T[0]:
- Условный тип, который проверяет, является ли массив T пустым.
- T extends []: Проверяет, является ли T пустым массивом ([]):
  а) Если T является пустым массивом, то тип возвращает never. never означает, что значение этого типа никогда не может существовать. Это логично, потому что у пустого массива нет первого элемента.
  б) Если T не является пустым массивом, то тип возвращает T[0].
- T[0] - обращается к первому элементу массива T.

3) Пример:
- head1 имеет тип 'a', потому что первый элемент arr1 - это строка 'a';
- head2 имеет тип 3, потому что первый элемент arr2 - это число 3;
- head3 имеет тип never, потому что arr3 - пустой массив.

4) Примечания:
- Использование any[] для ограничения типа T позволяет типу First работать с массивами любого типа (чисел, строк, объектов и т.д.).
- Проверка на пустой массив с помощью T extends [] предотвращает ошибки при попытке получить доступ к T[0], когда массив пуст.
- never – это “пустой” тип, означающий отсутствие значения. Он используется для обозначения ситуаций, когда функция никогда не должна возвращать результат или когда тип не может содержать никаких значений. В данном контексте, поскольку пустой массив не имеет первого элемента, never логично представлять тип для этого случая.
*/
