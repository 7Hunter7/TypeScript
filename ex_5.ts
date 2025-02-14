// Задание 5. Алгоритмическая задача

/* Что нужно сделать:
Используя примитивную типизацию с помощью TypeScript, напишите код, который:
Принимает число.
Возводит в квадрат все ЦИФРЫ этого числа и конкатенирует их, то есть склеивает обратно в одно число и возвращает его.
Если число отрицательное — функция должна вернуть его обратно.
Пример:
9119 → 9 1 1 9 → 81 1 1 81 → 811181
*/

// Решение:
function squareDigits(num: number): number {
  // Если число отрицательное, возвращаем его обратно
  if (num < 0) {
    return num;
  }

  // Преобразуем число в строку
  const numStr: string = num.toString();

  // Разделяем строку на массив цифр
  const digits: string[] = numStr.split("");

  // Возводим в квадрат каждую цифру и преобразуем обратно в строку
  const squaredDigits: string[] = digits.map((digit: string) => {
    const digitNum: number = parseInt(digit, 10);
    const squared: number = digitNum * digitNum;
    return squared.toString();
  });

  // Объединяем все цифры в одну строку
  const resultStr: string = squaredDigits.join("");

  // Преобразуем строку обратно в число и возвращаем
  return parseInt(resultStr, 10);
}

// Проверка:
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(0)); // 0
console.log(squareDigits(123)); // 149
console.log(squareDigits(5)); // 25
console.log(squareDigits(-5)); // -5
console.log(squareDigits(9)); // 81
console.log(squareDigits(10)); // 10

// Объяснение кода:
/*
1) Типизация:
- num: number - Указывает, что функция принимает число в качестве аргумента.
- : number - Указывает, что функция возвращает число.
- numStr: string - Указывает, что переменная numStr имеет тип строка.
- digits: string[] - Указывает, что переменная digits является массивом строк (цифр).
- squaredDigits: string[] - Указывает, что переменная squaredDigits является массивом строк (квадратов цифр).
- digitNum: number - Указывает, что переменная digitNum имеет тип число.
- squared: number - Указывает, что переменная squared имеет тип число.
- resultStr: string - Указывает, что переменная resultStr имеет тип строка.

2) Обработка отрицательных чисел:
- if (num < 0) { return num; } - Если число отрицательное, функция сразу возвращает его обратно, как указано в задании.

3) Преобразование числа в строку:
- const numStr: string = num.toString(); - Преобразует число в строку, чтобы можно было получить доступ к каждой цифре.

4) Разделение строки на цифры:
- const digits: string[] = numStr.split(""); - Разбивает строку на массив отдельных цифр (в виде строк).

5) Возведение в квадрат и преобразование обратно в строку:
- digits.map((digit: string) => { ... }) - Использует метод map для итерации по массиву цифр. 

Для каждой цифры выполняется следующее:
- const digitNum: number = parseInt(digit, 10); - Преобразует цифру из строки в число.
- const squared: number = digitNum * digitNum; - Возводит цифру в квадрат.
- return squared.toString(); - Преобразует квадрат цифры обратно в строку.

6) Объединение квадратов цифр в строку:
- const resultStr: string = squaredDigits.join(""); - Объединяет все квадраты цифр (в виде строк) в одну строку.

7) Преобразование строки обратно в число:
- return parseInt(resultStr, 10); - Преобразует строку, содержащую квадраты цифр, обратно в число. Основание системы счисления (10) указано для явности.
*/
