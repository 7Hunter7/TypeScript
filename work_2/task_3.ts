// Задание 3. Массивы (часть 1)
/*
Что нужно сделать
Используя типизацию массивов, напишите функцию, которая принимает строку, содержащую предложение на русском языке, а возвращает строку, где каждое слово в предложении начинается с большой буквы. При этом порядок слов должен сохраняться.

Пример:
«Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.»
↓
«Не Волнуйтесь, Если Что-то Не Работает. Если Бы Всё Работало, Вас Бы Уволили.»
*/

// Решение:
function capitalizeWords(sentence: string): string {
  // Разбиваем предложение на массив слов.  Используем string[], чтобы явно указать тип.
  const words: string[] = sentence.split(" ");

  // Преобразуем каждое слово в массиве, делая первую букву заглавной.
  const capitalizedWords: string[] = words.map((word: string) => {
    if (word.length === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Собираем массив слов обратно в предложение.
  return capitalizedWords.join(" ");
}

// Пример использования
const sentence =
  "Не волнуйтесь, если что-то не работает. Если бы всё работало, вас бы уволили.";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence);
// "Не Волнуйтесь, Если Что-То Не Работает. Если Бы Всё Работало, Вас Бы Уволили."

const emptySentence = "";
const capitalizedEmptySentence = capitalizeWords(emptySentence);
console.log(capitalizedEmptySentence); // ""

const sentenceWithPunctuation = "hello, world!";
const capitalizedSentenceWithPunctuation = capitalizeWords(
  sentenceWithPunctuation
);
console.log(capitalizedSentenceWithPunctuation); // "Hello, World!"

const sentenceWithSpaces = "  hello world  ";
const capitalizedSentenceWithSpaces = capitalizeWords(sentenceWithSpaces);
console.log(capitalizedSentenceWithSpaces); // " Hello World "

// Разъяснения:
/*
1) Типизация:
- Функция принимает аргумент sentence типа string и возвращает string.
- Массивы words и capitalizedWords типизированы как string[].
- Переменная word внутри map типизирована как string.

2) Разбиение на слова:
- sentence.split(' ') - разбивает строку на массив слов, используя пробел в качестве разделителя.

3) Преобразование каждого слова:
- words.map(...) - создает новый массив, применяя функцию к каждому элементу массива words.
- word.charAt(0).toUpperCase() + word.slice(1) - берет первый символ слова (charAt(0)), преобразует его в верхний регистр (toUpperCase()), и добавляет к нему остальную часть слова, начиная со второго символа (slice(1)).
- Добавлена обработка пустой строки (if (word.length === 0) { return word; }), чтобы избежать ошибок при обработке предложений, начинающихся или заканчивающихся пробелами, или содержащих несколько пробелов подряд.

4) Сборка обратно в предложение:
- capitalizedWords.join(' ') - соединяет элементы массива capitalizedWords обратно в строку, используя пробел в качестве разделителя.
*/
