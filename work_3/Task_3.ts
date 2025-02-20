// Задание 3. Перечисления
/*
Что нужно сделать:
Перепишите исходный код с помощью перечисления. Напишите небольшой сопроводительный текст, объяснив:
как изменился код с использованием перечислений;
повлияло ли это на удобство работы.
*/
/*
const Directions = ["Up", "Down", "Left", "Right"];

type Player = {
  x: number;
  y: number;
  move: (direcion: string, amount: number) => void;
};

const player: Player = {
  x: 0,
  y: 0,
  move: function (direction: string, amount: number) {
    switch (direction) {
      case Directions[0]:
        this.y += amount;
        break;
      case Directions[1]:
        this.y -= amount;
        break;
      case Directions[2]:
        this.x -= amount;
        break;
      case Directions[3]:
        this.x += amount;
        break;
      default:
        break;
    }
  },
};

player.move(Directions[0], 1);
player.move(Directions[1], 2);
player.move(Directions[2], 2);
player.move(Directions[3], 3);

console.log(player.x === 1); // true
console.log(player.y === -1); // true
*/

// Решение:
enum Directions {
  Up,
  Down,
  Left,
  Right,
}

type Player = {
  x: number;
  y: number;
  move: (direction: Directions, amount: number) => void;
};

const player: Player = {
  x: 0,
  y: 0,
  move: function (direction: Directions, amount: number) {
    switch (direction) {
      case Directions.Up:
        this.y += amount;
        break;
      case Directions.Down:
        this.y -= amount;
        break;
      case Directions.Left:
        this.x -= amount;
        break;
      case Directions.Right:
        this.x += amount;
        break;
      default:
        break;
    }
  },
};

player.move(Directions.Up, 1);
player.move(Directions.Down, 2);
player.move(Directions.Left, 2);
player.move(Directions.Right, 3);

console.log(player.x === 1); // true
console.log(player.y === -1); // true

// Объяснения:
/*
1) enum Directions:
Определяет перечисление Directions с четырьмя элементами: Up, Down, Left, Right. По умолчанию, эти элементы получают числовые значения 0, 1, 2, 3 соответственно.

2) type Player: 
Тип Player теперь определяет, что функция move принимает параметр direction типа Directions.

3) player.move(Directions.Up, 1):
Примеры вызовов move теперь используют элементы перечисления Directions вместо индексов массива.
 */

// Сопроводительный текст:
/*
1) Как изменился код с использованием перечислений:
- Вместо массива строк `Directions`, мы теперь используем перечисление `Directions`.
- Тип параметра `direction` функции `move` изменился с `string` на `Directions`.
- При вызове функции `move`, мы теперь используем элементы перечисления `Directions` (например, `Directions.Up`) вместо индексов массива `Directions` (например, `Directions[0]`).

2) Повлияло ли это на удобство работы:
Да, использование перечислений значительно улучшило удобство работы и читаемость кода по следующим причинам:

3) Типобезопасность: 
- TypeScript теперь знает, какие значения допустимы для параметра `direction`. Это предотвращает ошибки, когда случайно передается некорректное значение направления. 
- Компилятор теперь выдаст ошибку, если мы случайно попытаемся передать, например, строку "Uppp" в функцию `move`.

4) Читаемость: 
Вместо использования индексов массива (например, `Directions[0]`), мы теперь используем именованные элементы перечисления (например, `Directions.Up`). Это делает код более понятным и легким для чтения.

5) Автозаполнение: 
IDE предоставляет автозаполнение для элементов перечисления `Directions`, что упрощает написание кода и снижает вероятность опечаток.

6) Поддержка рефакторинга: 
Если мы захотим изменить название направления, нам нужно будет изменить его только в определении перечисления. TypeScript автоматически обновит все ссылки на это направление в коде. С массивом нам бы пришлось искать все места, где используется этот индекс массива и обновлять их вручную.

- В целом, использование перечислений в данном случае сделало код более типобезопасным, читаемым, удобным в поддержке и уменьшило вероятность ошибок.
- Перечисления - отличный способ представить набор именованных констант, особенно если эти константы используются как значения параметра функции или свойства объекта.
*/
