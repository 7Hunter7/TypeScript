// Задание 1. Приведение типов (as)
/*
Что нужно сделать:
В этом задании нужно провести манипуляции над готовым кодом, понять причины проблем и решить их.
Необходимо:
Запустить код и убедиться, что типизация работает корректно, а сам код выполняется.
*/
/*
type House = {
  street: string;
  apartmentCount: number;
  buildInfo: {
    year: number;
    material: string;
  };
};
function getHouse(): House {
  const house = {} as House;
  house.street = "Pushkina";
  house.apartmentCount = 76;

  house.buildInfo = {
    year: 1996,
    material: "rocks",
  };

  return house;
}

function handleHouse(): void {
  const house: House = getHouse();

  console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
  console.log(
    `build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `
  );
}
handleHouse();
*/
/*
Закомментировать строку: house.apartmentCount = 76. Запустить код и посмотреть на результат выполнения. Сформулировать причину ошибки.
Раскомментировать строку из предыдущего пункта.
Закомментировать следующую часть кода:
house.buildInfo = {
year: 1996,
material: 'rocks',
};
- Запустить код и сформулировать причину ошибки.
- Переписать функцию getHouse таким образом, чтобы не возникало проблем, с которыми вы встречались ранее.
- Написать небольшой сопроводительный текст: объяснить прич
ину возникновения ошибок и способ, который поможет их избежать.
*/

// Решение:
type House = {
  street: string;
  apartmentCount: number;
  buildInfo: {
    year: number;
    material: string;
  };
};

// function getHouse(): House {
//   const house = {} as House;
//   house.street = 'Pushkina';
//   house.apartmentCount = 76;

//   house.buildInfo = {
//     year: 1996,
//     material: 'rocks',
//   };

//   return house;
// }

function handleHouse(): void {
  const house: House = getHouse();

  console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
  console.log(
    `build in ${house.buildInfo.year}, build from ${house.buildInfo.material} `
  );
}
// handleHouse();

// 1. Закомментировал house.apartmentCount = 76;

// function getHouse(): House {
//   const house = {} as House;
//   house.street = 'Pushkina';
//   // house.apartmentCount = 76;

//   house.buildInfo = {
//     year: 1996,
//     material: 'rocks',
//   };

//   return house;
// }

// Результат:
//  Тип '{ street: string; buildInfo: { year: number; material: string; }; }' не может быть назначен типу 'House'.
//   Отсутствует свойство "apartmentCount" в типе '{ street: string; buildInfo: { year: number; material: string; }; }'.

// Причина ошибки:
//  Тип House требует наличие свойства apartmentCount, а при его отсутствии в объекте house TypeScript выдает ошибку.  Приведение типа с помощью "as House" подавляет проверку, но не делает свойство опциональным.

// 2. Раскомментировал house.apartmentCount = 76; и закомментировал house.buildInfo

// function getHouse(): House {
//   const house = {} as House;
//   house.street = 'Pushkina';
//   house.apartmentCount = 76;

//   // house.buildInfo = {
//   //   year: 1996,
//   //   material: 'rocks',
//   // };

//   return house;
// }

// Результат:
// Тип '{ street: string; apartmentCount: number; }' не может быть назначен типу 'House'.
//   Отсутствует свойство "buildInfo" в типе '{ street: string; apartmentCount: number; }'.

// Причина ошибки:
// Аналогична предыдущей. Тип House требует наличие свойства buildInfo, а при его отсутствии TypeScript выдает ошибку.  Приведение типа с помощью "as House" подавляет проверку, но не делает свойство опциональным.

// Решение: Переписываем getHouse без использования as.  Возвращаем сразу сконструированный объект.

function getHouse(): House {
  const house: House = {
    street: "Pushkina",
    apartmentCount: 76,
    buildInfo: {
      year: 1996,
      material: "rocks",
    },
  };

  return house;
}

handleHouse();

// Объяснение:
/*
Использование "as" для приведения типа может быть опасным, так как отключает проверку типов TypeScript на этапе компиляции. Это позволяет присваивать переменным объекты, не соответствующие объявленному типу, что может привести к ошибкам во время выполнения программы.

В данном случае, мы использовали "as House" для приведения пустого объекта {} к типу House.  Это позволило TypeScript пропустить отсутствие обязательных свойств street, apartmentCount и buildInfo.

Чтобы избежать таких проблем, следует избегать использования "as" и всегда указывать правильные типы для переменных.  Вместо того, чтобы создавать пустой объект и затем добавлять в него свойства, лучше сразу создать объект со всеми необходимыми свойствами. Это гарантирует, что объект будет соответствовать объявленному типу и поможет избежать ошибок во время выполнения программы.
*/
