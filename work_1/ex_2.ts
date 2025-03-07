// Задание 2. Ошибка в коде — 2
// Найти и исправить ошибку в чужом коде.
/*
document.addEventListener('click', (e) => {
const coords = [e.posX, e.posY];
console.log(Point is ${coords[0]}, ${coords[1]});
});
*/

// Решение:
document.addEventListener("click", (e: MouseEvent) => {
  // Типизация события MouseEvent
  const coords = [e.clientX, e.clientY]; // Свойства posX и posY не существуют в объекте события MouseEvent, нужно использовать clientX и clientY
  console.log(`Point is ${coords[0]}, ${coords[1]}`); // Неправильный синтаксис --> используем обратные кавычки.
});

// Объяснение ошибки:
/*
1) Отсутствие типизации события e: Изначально тип события e не был указан. Без указания типа TypeScript не знает, какие свойства доступны у объекта события.
2) Неправильные свойства для получения координат: Свойства posX и posY не существуют в объекте события MouseEvent. Для получения координат клика мыши нужно использовать clientX и clientY.
3) Неправильный синтаксис string interpolation: не использование обратных кавычек.
*/

// Как TypeScript помогает избежать ошибок:
/*
1) Указав тип события e как MouseEvent, мы сообщаем TypeScript, что это событие клика мыши и у него есть определенные свойства. Если бы мы попытались обратиться к несуществующему свойству (например, e.posX), TypeScript выдал бы ошибку на этапе компиляции.
2) Использование string interpolation (шаблонных литералов) с обратными кавычками позволяет встраивать значения переменных непосредственно в строку. TypeScript также проверяет типы переменных, используемых в строке, что помогает избежать ошибок.
*/
