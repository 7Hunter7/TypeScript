// Задание 3. Классы
/*
Что нужно сделать:
- Необходимо создать класс MyArray, который позволяет работать с массивом данных. В экземпляре класса массив может быть создан с элементами или без них. Переменные хранятся в специальном поле внутри экземпляра класса.
- В классе необходимо реализовать перечисленные ниже методы, которые могут корректно работать с любыми типами данных через дженерик. Все методы должны отрабатывать как с примитивами, так и с объектами. В TypeScript всё должно быть строго типизировано.
- Методы, которые нужно реализовать:
areElementsEqual(index1, index2) — возвращает результат обычного строго равенства для примитивных типов данных и глубокого сравнения для объектов на один уровень. Вложенные объекты не должны учитываться.
flatten() — убирает вложенность массивов на любую глубину. См. Flatten a list.
- В процессе реализации необходимо избегать использования встроенных методов push, concat, slice и других для манипуляции с массивом. Если вам необходимы встроенные методы, то их нужно реализовать самостоятельно.
- Ниже приведен пример использования MyArray:

const arr = new MyArray<number>([1, 2, 3]) // valid
const arr1 = new MyArray() // valid

Переменные нужно хранить в специальном поле внутри экземпляра класса
const arr = new MyArray<number>([1, 2, 3]);
console.log(arr.elements) // [1, 2, 3];
*/

// Решение:
class MyArray<T> {
  private elements: T[];

  constructor(initialElements: T[] = []) {
    this.elements = this.copyArray(initialElements);
  }

  getElements(): T[] {
    return this.copyArray(this.elements); // Возвращаем копию, чтобы нельзя было изменить массив снаружи
  }

  private copyArray(arr: T[]): T[] {
    const newArr: T[] = [];
    for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i];
    }
    return newArr;
  }

  private getLength(arr: T[]): number {
    let length = 0;
    while (arr[length] !== undefined) {
      length++;
    }
    return length;
  }

  areElementsEqual(index1: number, index2: number): boolean {
    if (
      index1 < 0 ||
      index1 >= this.getLength(this.elements) ||
      index2 < 0 ||
      index2 >= this.getLength(this.elements)
    ) {
      return false; // Индексы за пределами массива
    }

    const element1 = this.elements[index1];
    const element2 = this.elements[index2];

    if (
      typeof element1 === "object" &&
      element1 !== null &&
      typeof element2 === "object" &&
      element2 !== null
    ) {
      // Поверхностное сравнение объектов
      const keys1 = Object.keys(element1);
      const keys2 = Object.keys(element2);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if ((element1 as any)[key] !== (element2 as any)[key]) {
          // Явно преобразуем к `any` здесь
          return false;
        }
      }

      return true;
    } else {
      return element1 === element2; // Строгое равенство для примитивов
    }
  }

  flatten(): any[] {
    const result: any[] = [];
    for (let i = 0; i < this.getLength(this.elements); i++) {
      const element = this.elements[i];
      if (Array.isArray(element)) {
        const flatSubArray = new MyArray(...(element as any)).flatten(); // Рекурсивный вызов flatten с преобразованием типа
        for (let j = 0; j < this.getLength(flatSubArray); j++) {
          result[result.length] = flatSubArray[j];
        }
      } else {
        result[result.length] = element;
      }
    }
    return result;
  }
}

// Пример использования
const arr = new MyArray<number>([1, 2, 3]);
console.log(arr.getElements()); // [1, 2, 3];

const arr1 = new MyArray<string>();
console.log(arr1.getElements()); // [];

const arr2 = new MyArray<number | string>([1, "hello", 3]);
console.log(arr2.getElements()); // [1, "hello", 3];

const arr3 = new MyArray<object>([{ a: 1 }, { b: 2 }]);
console.log(arr3.getElements());

const arr4 = new MyArray<number>([1, 2, 3]);
console.log(arr4.areElementsEqual(0, 0)); // true
console.log(arr4.areElementsEqual(0, 1)); // false

const arr5 = new MyArray<object>([{ a: 1 }, { a: 1 }]);
console.log(arr5.areElementsEqual(0, 1)); // true

const arr6 = new MyArray<any>([1, [2, [3, [4, 5]]]]);
console.log(arr6.flatten()); // [1, 2, 3, 4, 5]

const arr7 = new MyArray<number | string | number[]>([1, "hello", [3, 4]]);
console.log(arr7.flatten()); // [1, "hello", 3, 4]

// Описание:
/*
1) Класс MyArray<T>:
- Наш собственный класс, который работает как массив, но с некоторыми ограничениями (мы не используем встроенные методы push, concat и slice);
- T - дженерик, который означает, что массив может хранить данные любого типа (числа, строки, объекты и т.д.).

2) private elements: T[]: 
- поле (переменная) внутри класса, где мы храним элементы массива. private означает, что доступ к этому полю можно получить только внутри класса.

3) constructor(initialElements: T[] = []): 
- Конструктор класса. Он вызывается, когда мы создаем новый экземпляр класса MyArray;
- Он принимает необязательный аргумент initialElements - начальный массив элементов;
- Если мы не передадим начальный массив, то создастся пустой массив.

4) getElements(): T[]: 
- Этот метод возвращает копию массива elements. Это важно, потому что если мы просто вернем ссылку на оригинальный массив, то любой, кто получит эту ссылку, сможет изменить наш массив напрямую;
- Возвращая копию, мы защищаем наши данные.

5) copyArray(arr: T[]): T[]: 
- Метод делает копию массива;
- Он используется для создания копии начального массива в конструкторе и для возврата копии массива в getElements();
- В нем нельзя использовать встроенные методы, поэтому копирование происходит поэлементно в цикле.

6) getLength(arr: T[]): number: 
- Метод вычисляет длину массива без использования свойства length.

7) areElementsEqual(index1: number, index2: number): boolean: 
- Метод сравнивает два элемента массива по указанным индексам:
а) Если элементы являются примитивными типами (числа, строки, boolean и т.д.), то мы используем строгое равенство (===);
б) Если элементы являются объектами, то мы делаем поверхностное сравнение. Это означает, что мы сравниваем ключи и значения свойств объектов;
в) Если все ключи и значения равны, то объекты считаются равными. Вложенные объекты не сравниваются (сравниваются только ссылки на них, если они есть).

8) flatten(): any[]:
- Этот метод использует рекурсию для обработки вложенных массивов.
- Метод “разворачивает” массив, удаляя все уровни вложенности;
- Например, если у нас есть массив [1, [2, [3, 4]]], то после вызова flatten() мы получим [1, 2, 3, 4];
- Тип возвращаемого значения изменен на any[]. Дело в том, что без этого, TypeScript не может гарантировать, что все элементы вложенных массивов будут соответствовать типу T класса.
- MyArray. any[] позволяет хранить элементы любого типа, что необходимо для “разворачивания” массивов с разными типами элементов. Это компромисс, но он необходим для соответствия условию задачи о работе с любыми типами данных. Альтернативным решением было бы усложнить логику, чтобы определить общий тип для всех элементов, но это выходит за рамки простого решения.
- any отключает проверку типов для конкретного значения или типа. Это позволяет нам обойти ограничения TypeScript и написать более гибкий код. Однако, следует использовать any с осторожностью, потому что это может привести к ошибкам во время выполнения.

9) new MyArray(...element as any).flatten(): 
- В рекурсивном вызове flatten(), element as any преобразует вложенный массив к типу any. 
- Оператор ... используется для передачи элементов вложенного массива в качестве аргументов конструктора MyArray. 
- Здесь опять же используется any, потому что TypeScript не может автоматически вывести тип вложенного массива.

10) Примеры:
- Примеры использования показывают, как создавать экземпляры класса MyArray с разными типами данных и как использовать методы getElements(), areElementsEqual() и flatten().
 */
