// Задание 4. Написание кода
/*
Что нужно сделать:
Используя примитивную типизацию с помощью TypeScript, напишите код, который:
принимает строку из нескольких слов, разделённых пробелами,
возвращает строку со словами в отзеркаленном виде, причём последовательность слов должна быть сохранена.
Пример:
"Это пример!" ==> "отЭ !ремирп"
*/

// Решение:
function reverseWords(input: string): string {
  // Проверяем, является ли входная строка пустой или состоит только из пробелов
  if (!input.trim()) {
    return input; // Возвращаем исходную строку, если она пуста или состоит только из пробелов
  }

  // Разбиваем строку на слова, используя пробел в качестве разделителя
  const words: string[] = input.split(" ");

  // Отзеркаливаем каждое слово и собираем обратно
  const reversedWords: string[] = words.map((word: string): string => {
    return word.split("").reverse().join("");
  });

  // Соединяем отзеркаленные слова обратно в строку, используя пробел в качестве разделителя
  return reversedWords.join(" ");
}

// Проверка:
console.log(reverseWords("Это пример!")); // "отЭ !ремирп"
console.log(reverseWords("Привет, мир!")); // ",тевирП !рим"
console.log(reverseWords("")); // ""
console.log(reverseWords("   ")); // "   "
console.log(reverseWords("1 2 3")); // "1 2 3"
console.log(reverseWords("один два три")); // "нидо авд ирт"
console.log(reverseWords("слово!")); // "оволс!"
console.log(reverseWords("  слово  ")); // "  оволс  "

// Объяснение кода:
/*
1) Типизация:
- input: string - Указывает, что функция принимает строку в качестве аргумента.
- string - Указывает, что функция возвращает строку.
- words: string[] - Типизирует массив слов как массив строк.
- reversedWords: string[] - Типизирует массив отзеркаленных слов как массив строк.

2) Обработка пустых строк и строк с пробелами:
- input.trim() - Удаляет начальные и конечные пробелы, чтобы избежать обработки пустых строк.
- if (!input.trim()) - Проверяет, является ли входная строка пустой. Если строка пуста или состоит только из пробелов, функция сразу возвращает ее без изменений. Это обрабатывает граничные случаи.

3) Разбиение строки на слова:
- input.split(" ") - Разбивает входную строку на массив слов, используя пробел в качестве разделителя.

4) Отзеркаливание слов:
- words.map((word: string): string => { ... }) - Использует метод map для итерации по массиву слов. 

Для каждого слова выполняется следующая операция:
- word.split("") - Разбивает слово на массив символов.
- .reverse() - Переворачивает порядок символов в массиве.
- .join(""): Соединяет символы обратно в строку.

Результат (отзеркаленное слово) возвращается.

5) Сборка отзеркаленных слов обратно в строку:
- reversedWords.join(" ") - Соединяет отзеркаленные слова обратно в строку, используя пробел в качестве разделителя.
*/
