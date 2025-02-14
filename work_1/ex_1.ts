// Задание 1. Ошибка в коде
// Найти и исправить ошибку в чужом коде.
/*
const actor: {
  name: string;
  firstName: string;
  country: string;
  city: string;
  hasOskar: boolean;
  filmsCount: number;
  age: number;
  languages: string[];
} = {
  name: "Michael",
  firstName: "Ivanov",
  country: "Russia",
  city: "Makhachkala",
  hasOskar: false,
  filmsCount: 10,
  age: "14",
  languages: ["RU-ru", "EN-us", "TR-tr"],
};
const howOldWillBeActorAfterTwentyYears = (actor) => {
  return actor.age + 20;
};
console.log(howOldWillBeActorAfterTwentyYears(actor)); // '1420'
*/

// Решение:
const actor: {
  name: string;
  firstName: string;
  country: string;
  city: string;
  hasOskar: boolean;
  filmsCount: number;
  age: number; // Для age указан тип number
  languages: string[];
} = {
  name: "Michael",
  firstName: "Ivanov",
  country: "Russia",
  city: "Makhachkala",
  hasOskar: false,
  filmsCount: 10,
  age: 14, // Пишем число 14 без ковычек, так как для age указан тип number!
  languages: ["RU-ru", "EN-us", "TR-tr"],
};
const howOldWillBeActorAfterTwentyYears = (actor: { age: number }) => {
  // Указываем тип для actor: object -> { age: number }, так как нужно более точно определить тип параметра actor в функции howOldWillBeActorAfterTwentyYears и что у него есть свойство age типа number

  return actor.age + 20;
};
console.log(howOldWillBeActorAfterTwentyYears(actor)); // '34'

// Объяснение ошибки:
/* 1. Изначально переменной `age` в объекте `actor` присваивалось строковое значение "14", в то время как в типе объекта было указано `number`.  Это приводило к несоответствию типов. 
2.  В функции `howOldWillBeActorAfterTwentyYears` не была указана типизация параметра `actor`. Это значит, что TypeScript не мог проверить, имеет ли объект `actor` свойство `age`, и какого оно типа.  В данном случае TypeScript позволил выполнить операцию `+` над свойством `actor.age`, которая, ввиду строкового значения `age`, приводила к конкатенации строк, а не сложению чисел.
*/

// Как TypeScript помогает избежать ошибок:
/* TypeScript, благодаря статической типизации, позволяет выявлять подобные ошибки на этапе компиляции, до запуска кода. 
Указав тип параметра `actor` в функции `howOldWillBeActorAfterTwentyYears`, мы явно указываем, какие свойства должен иметь объект и какого типа должны быть эти свойства.  Если бы объект `actor` не соответствовал указанному типу, TypeScript выдал бы ошибку. В данном случае, указав `actor: { age: number }`, мы гарантируем, что `actor` имеет свойство `age` числового типа, и операция сложения будет выполнена корректно.
*/
