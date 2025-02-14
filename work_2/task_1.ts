// Задание 1. Работа с функцией
/*
Что нужно сделать:
-Реализуйте функцию arrayDiff, которая вычитает один массив из другого и возвращает разницу.
  arrayDiff(a, b);
-Функция должна убирать все значения из массива a, которые представлены в массиве b, сохраняя их порядок.

arrayDiff([1, 2], [1]) == [2]
arrayDiff([1, 2, 3, 4], [5, 6]) == [1, 2, 3, 4]
arrayDiff([2, 2, 2, 2, 3], [2]) == [3]

-Обратите внимание: если значение, которое есть в массиве b, встречается несколько раз в массиве a, то все вхождения должны быть удалены.
*/

// Решение:
function arrayDiff(a: number[], b: number[]): number[] {
  // Создаем Set из массива b для быстрого поиска
  const bSet = new Set(b);

  // Фильтруем массив a, оставляя только элементы, которых нет в bSet
  return a.filter((element) => !bSet.has(element));
}

// Примеры:
console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 3, 4], [5, 6])); //  [1, 2, 3, 4]
console.log(arrayDiff([2, 2, 2, 2, 3], [2])); //  [3]
console.log(arrayDiff([1, 2, 2], [2])); // [1]
console.log(arrayDiff([1, 2, 2], [])); //  [1, 2, 2]
console.log(arrayDiff([], [1, 2])); // []
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]

// Объяснение кода:
/*
1) Типизация:
- Функция принимает два массива a и b, которые типизированы как number[] (массивы чисел).
- Функция возвращает массив чисел number[].

2) Set для оптимизации:
- Создание Set из массива b значительно ускоряет процесс поиска элементов. Set позволяет проверять наличие элемента за константное время (O(1)), в отличие от indexOf или includes в массиве, которые имеют линейную сложность (O(n)).

3) filter для создания нового массива:
- Метод filter создает новый массив, содержащий только те элементы из a, которые удовлетворяют условию.
- Условие !bSet.has(element) проверяет, что текущий element из массива a отсутствует в Set bSet.

4) В данном задании не требуется объединение типов. Но если бы функция могла принимать массив чисел или массив строк, можно было бы использовать объединение типов: (number | string)[].
*/
