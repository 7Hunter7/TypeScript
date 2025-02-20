// Задание 3. Перечисления
/*
Что нужно сделать:
Перепишите исходный код с помощью перечисления. Напишите небольшой сопроводительный текст, объяснив:
как изменился код с использованием перечислений;
повлияло ли это на удобство работы.
*/

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
