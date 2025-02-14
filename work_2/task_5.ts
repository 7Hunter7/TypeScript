// Задание 5. Объекты v2 — код
/*
Что нужно сделать:
-Реализуйте функцию areEqual, которая принимает два объекта в качестве аргументов. Не забывайте про типизацию.
-Если два переданных объекта содержат одинаковое количество ключей с одинаковыми значениями и одинаковыми названиями ключей — функция должна вернуть true. Иначе — false.

Советы и рекомендации:
-Для итерации по объектам используйте получение ключей через Object.keys(objectA) и Object.keys(objectB) — это поможет избежать возможных ошибок с типами.
-В процессе проработки задания вам важно потренировать навыки создания объектов и работы с полями объектов. Постарайтесь делать это осознанно.
*/

// Решение:
function areEqual(
  objA: Record<string, any>,
  objB: Record<string, any>
): boolean {
  // Получаем ключи обоих объектов
  const keysA: string[] = Object.keys(objA);
  const keysB: string[] = Object.keys(objB);

  // Сравниваем количество ключей. Если количество ключей разное, объекты не равны
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Сравниваем значения для каждого ключа
  for (const key of keysA) {
    // Проверяем, существует ли ключ в обоих объектах
    if (!objB.hasOwnProperty(key)) {
      return false;
    }

    // Сравниваем значения по ключу
    if (
      typeof objA[key] === "object" &&
      objA[key] !== null &&
      typeof objB[key] === "object" &&
      objB[key] !== null
    ) {
      if (!areEqual(objA[key], objB[key])) {
        // Рекурсивный вызов для сравнения вложенных объектов
        return false;
      }
    } else if (objA[key] !== objB[key]) {
      return false; // Если значения не равны, объекты не равны
    }
  }

  // Если все проверки пройдены, то объекты равны
  return true;
}

// Примеры:
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { b: 2, a: 1 }; // Порядок ключей не важен
const obj4 = { a: 1, b: 3 };
const obj5 = { a: 1, c: 2 };
const obj6 = { a: 1, b: 2, c: 3 };
const obj7 = { a: 1, b: 2, d: undefined };
const obj8 = { a: 1, b: 2, e: null };
const obj9 = { a: 1, b: { c: 3 } };
const obj10 = { a: 1, b: { c: 3 } };
const obj11 = { a: 1, b: { c: 4 } };

console.log(areEqual(obj1, obj2)); // true
console.log(areEqual(obj1, obj3)); // true (порядок ключей не важен)
console.log(areEqual(obj1, obj4)); // false (значение 'b' отличается)
console.log(areEqual(obj1, obj5)); // false (ключ 'c' отсутствует в obj1)
console.log(areEqual(obj1, obj6)); // false (разное количество ключей)
console.log(areEqual(obj7, obj8)); // false (undefined != null)
console.log(areEqual(obj9, obj10)); // true (deep comparison)
console.log(areEqual(obj9, obj11)); // false (deep comparison)
console.log(areEqual({}, {})); // true (пустые объекты)
console.log(areEqual({ a: undefined }, {})); //false

// Разъяснения:
/*
1) Типизация:
- Функция принимает два аргумента objA и objB типа Record<string, any>.
- Record<string, any> позволяет передавать объекты с любыми ключами (типа string) и любыми значениями (типа any). Это обеспечивает гибкость.
- Функция возвращает boolean.
- keysA и keysB типизированы как string[].

2) Получение ключей:
- Object.keys(objA) возвращает массив ключей объекта objA.
- Object.keys(objB) возвращает массив ключей объекта objB.

3) Сравнение количества ключей:
- Если количество ключей в объектах отличается, значит, объекты не равны.

4) Сравнение значений для каждого ключа:
- Итерируемся по ключам первого объекта (keysA).
- objB.hasOwnProperty(key) - проверяет, существует ли текущий ключ в объекте objB. Если ключа нет, значит, объекты не равны.
- objA[key] !== objB[key] - сравнивает значения по текущему ключу. Если значения не равны, объекты не равны.

5) Deep Comparison (Рекурсия): 
- Если значением по ключу является объект (не null), вызывается функция areEqual рекурсивно для сравнения вложенных объектов.

6) Возврат true:
- Если все проверки пройдены (количество ключей одинаковое, все ключи существуют в обоих объектах, и значения по всем ключам совпадают), значит, объекты равны, и функция возвращает true.
*/
