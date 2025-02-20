// Задание 2. Тайпгарды + объединение
/*
Что нужно сделать:
- Тремя способами реализуйте функцию whatDoesThePetSay, которая должна возвращать результат работы функции meow, если аргументом передали «кота», и результат работы функции bark, если аргументом передали «собаку».
Три реализации — это:
С использованием обычных тайпгардов.
С использованием пользовательских тайпгардов.
С использованием тайпгардов через оператор in.
- Дополнительно можно сделать одну некрасивую реализацию: через приведение типов. Зато можно будет попрактиковаться и понять, что вы точно усвоили эту тему.
- Сравните эти способы между собой и напишите в небольшом сопроводительном тексте, какая из реализаций вам нравится больше и почему. Отразите в тексте, какие плюсы есть у использования разных типов тайпгардов.
*/

/*
type Cat = {
  name: string;
  meow: () => string;
};

type Dog = {
  name: string;
  bark: () => string;
};

const cat: Cat = {
  name: "Pushok",
  meow: () => "meow!",
};

const dog: Dog = {
  name: "Bobik",
  bark: () => "bark!",
};

// Expected:
// whatDoesThePetSay(cat) -> 'meow'
// whatDoesThePetSay(dog) -> 'bark'

function whatDoesThePetSay(pet: Dog | Cat): string {
  // ---Start coding here---
  return "Nothing :(";
  // ---End coding here---
}
*/

// Решение:
type Cat = {
  name: string;
  meow: () => string;
};

type Dog = {
  name: string;
  bark: () => string;
};

const cat: Cat = {
  name: "Pushok",
  meow: () => "meow!",
};

const dog: Dog = {
  name: "Bobik",
  bark: () => "bark!",
};

/*
Expected:
whatDoesThePetSay(cat) -> 'meow'
whatDoesThePetSay(dog) -> 'bark'
*/

// 1. С использованием обычных тайпгардов:
function whatDoesThePetSay_RegularTypeGuard(pet: Dog | Cat): string {
  if ("meow" in pet) {
    return pet.meow();
  } else {
    return pet.bark();
  }
}

// 2. С использованием пользовательских тайпгардов:
function isCat(pet: Dog | Cat): pet is Cat {
  return "meow" in pet;
}

function whatDoesThePetSay_CustomTypeGuard(pet: Dog | Cat): string {
  if (isCat(pet)) {
    return pet.meow();
  } else {
    return pet.bark();
  }
}

// 3. С использованием тайпгардов через оператор in:
function whatDoesThePetSay_InOperator(pet: Dog | Cat): string {
  if ("bark" in pet) {
    return pet.bark();
  }
  return pet.meow();
}

// 4. (Некрасивая реализация) Через приведение типов:
function whatDoesThePetSay_TypeAssertion(pet: Dog | Cat): string {
  try {
    return (pet as Cat).meow();
  } catch {
    return (pet as Dog).bark();
  }
}

// Проверка:
console.log("Regular Type Guard:");
console.log(whatDoesThePetSay_RegularTypeGuard(cat)); // "meow!"
console.log(whatDoesThePetSay_RegularTypeGuard(dog)); // "bark!"

console.log("\n Custom Type Guard:");
console.log(whatDoesThePetSay_CustomTypeGuard(cat)); // "meow!"
console.log(whatDoesThePetSay_CustomTypeGuard(dog)); // "bark!"

console.log("\n In Operator Type Guard:");
console.log(whatDoesThePetSay_InOperator(cat)); // "meow!"
console.log(whatDoesThePetSay_InOperator(dog)); // "bark!"

console.log("\n Type Assertion:");
console.log(whatDoesThePetSay_TypeAssertion(cat)); // "meow!"
console.log(whatDoesThePetSay_TypeAssertion(dog)); // "bark!"

// Объяснение кода:
/*
1) Сравнение способов:
- Все реализации, кроме приведения типов, корректны и хорошо читаемы.
- Реализация с приведением типов хоть и работает, но не является типобезопасной и полагается на обработку исключений, что ухудшает ее производительность и читаемость.
- Больше всего мне нравится реализация с пользовательским тайпгардом (`whatDoesThePetSay_CustomTypeGuard`).

2) Плюсы пользовательского тайпгарда:
- Читаемость и повторное использование: логика проверки типа вынесена в отдельную функцию `isCat`, что делает код более чистым и понятным. Эту функцию можно повторно использовать в других частях кода.
- Более сложная логика: пользовательские тайпгарды позволяют реализовать более сложную логику определения типа, чем простые проверки с помощью `typeof` или `in`.  Например, можно проверить несколько свойств объекта или использовать более сложные условия.
- Улучшенная поддержка системой типов: TypeScript понимает, что если функция `isCat` возвращает `true`, то переменная `pet` внутри блока `if` имеет тип `Cat`.  Это позволяет использовать автодополнение и проверку типов для свойств объекта `pet`.

3) Реализация с оператором `in` (`whatDoesThePetSay_InOperator`) тоже вполне хороша и лаконична, но она менее читаема, если логика определения типа становится сложнее. Обычные тайпгарды (if/else) могут быть приемлемы для простых случаев, но становятся менее удобными для чтения и поддержки при более сложной логике. Поэтому, когда логика определения типа становится хоть немного сложнее, лучше использовать пользовательские тайпгарды.

4) Реализация с приведением типов (`whatDoesThePetSay_TypeAssertion`) категорически не рекомендуется, поскольку является небезопасной и полагается на поимку исключений, что плохо сказывается на производительности и надежности кода.
*/
