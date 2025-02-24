// Задание 2. Типы
/*
Что нужно сделать:
В одном из ваших проектов было использовано внешнее API, но в API что-то изменилось. Вам нужно мигрировать написанный код на новый формат API, используя дженерики. Для этого необходимо настроить класс API Provider, который обрабатывает ответ сервера и возвращает его из метода, таким образом, чтобы oldApiProvider.getSomeOther() и newApiProvider.getSomeOther() возвращали одинаковый результат.

Неожиданно после работы внешних разработчиков API меняет формат запроса-ответа. Добавляются метаданные, а тело ответа перемещается в поле data.
*/
// Было:
/*
getUsers() ->

const response = [
{
"id": 49,
"name": "Kate",
"registrationDate": "2020-08-30 14:17:23"
}
];

// Стало:
const response = {
data: [
{
"id": 49,
"name": "Kate",
"registrationDate": "2020-08-30 14:17:23"
}
],
meta: {
trackId: "Sqny0mSDCByG",
trackerUrl: "someTrackerUrl",
}
}
*/
/*
Советы и рекомендации:
Обратите внимание, что формат ответа от API поменялся, поэтому вам необходимо обновить типы для данных.
*/

// Решение:
// Старый формат API
interface OldUser {
  id: number;
  name: string;
  registrationDate: string;
}

// Новый формат API
interface NewUser {
  id: number;
  name: string;
  registrationDate: string;
}

// Новый формат API Response
interface NewApiResponse<T> {
  data: T[]; // Свойство data, которое является массивом типа T
  meta: {
    trackId: string;
    trackerUrl: string;
  };
}

// Класс, который нужно адаптировать
class ApiProvider {
  // Старый метод, который нужно адаптировать
  getUsers(): OldUser[] {
    const response = [
      {
        id: 49,
        name: "Kate",
        registrationDate: "2020-08-30 14:17:23",
      },
    ];
    return response;
  }

  // Новый метод, который возвращает данные в новом формате
  getNewUsers(): NewApiResponse<NewUser> {
    const response: NewApiResponse<NewUser> = {
      data: [
        // data - массив объектов NewUser
        {
          id: 49,
          name: "Kate",
          registrationDate: "2020-08-30 14:17:23",
        },
      ],
      meta: {
        trackId: "Sqny0mSDCByG",
        trackerUrl: "someTrackerUrl",
      },
    };
    return response;
  }

  // Адаптированный метод, который возвращает данные в старом формате, используя новый API
  getSomeOther(): NewUser[] {
    const newApiResponse = this.getNewUsers();
    return newApiResponse.data;
  }
}

// Пример использования:
const apiProvider = new ApiProvider();

// Получаем данные в старом формате (из старого API)
const oldUsers = apiProvider.getUsers();
console.log("Old Users:", oldUsers); // [ Old Users: { id: 49, name: 'Kate', registrationDate: '2020-08-30 14:17:23' } ]
[
  "Old Users:",
  [{ id: 49, name: "Kate", registrationDate: "2020-08-30 14:17:23" }],
];

// Получаем данные в старом формате, используя новый API и адаптацию
const newUsersAdapted = apiProvider.getSomeOther();
console.log("New Users Adapted:", newUsersAdapted); //  [ New Users Adapted: {id: 49, name: 'Kate', registrationDate: '2020-08-30 14:17:23'} ]

// Описание:
/*
1) Типы данных:
а) OldUser - Представляет структуру пользователя в старом API;
б) NewUser:
- Представляет структуру пользователя в новом API.
- В данном случае, они одинаковые, но для гибкости и демонстрации адаптации оставил их разными;
- Если в реальности структура User изменилась, это будет отражено здесь;
в) NewApiResponse<T>: 
- Это ключевой дженерик-тип;
- Он представляет структуру ответа нового API;
- T - это тип данных, содержащихся в поле data. Это позволяет использовать этот тип для различных API-запросов, возвращающих разные типы данных.

2) Класс ApiProvider:
- getUsers() - Метод, который возвращает пользователей в старом формате API. Этот метод остается для совместимости;
getNewUsers() - Метод, который получает данные в новом формате API. Тип возвращаемого значения – NewApiResponse<NewUser>;
- getSomeOther() - Это адаптированный метод. Он использует getNewUsers() для получения данных в новом формате, а затем извлекает данные из поля data и возвращает их в формате NewUser[], как если бы это был старый API.

3) Пример:
- Создается экземпляр ApiProvider;
- getUsers() вызывается для получения данных в старом формате;
- getSomeOther() вызывается для получения данных в старом формате, адаптированных из нового формата API. Результат getSomeOther() должен соответствовать результату getUsers().

4) Ключевые моменты:
- Дженерик NewApiResponse<T> позволяет гибко описывать структуру ответа нового API. Он может использоваться для различных запросов, возвращающих разные типы данных, просто передавая нужный тип в качестве параметра T.
- Метод getSomeOther() выполняет адаптацию. Он берет данные в новом формате и преобразует их в старый формат, чтобы существующий код продолжал работать без изменений.
- В данном примере структуры OldUser и NewUser идентичны. Но если бы они отличались, адаптация потребовала бы преобразования данных между этими структурами в методе getSomeOther.
 */
