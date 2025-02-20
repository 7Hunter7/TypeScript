// Задание 1. Классы, модификаторы, статические методы
/*
Что нужно сделать:
Представим, что существует форум, на котором уже общаются пользователи. В связи с увеличением их числа мы начали ужесточать правила общения и выдавать предупреждения за нарушения. Следить одновременно за всеми очень сложно, поэтому вас попросили реализовать функционал по подсчёту коэффицента доверия к пользователю. У вас есть массив тестовых пользователей, на примере которых можно проверить работу нового функционала.

Формула подсчёта коэффициента доверия:
Количество сообщений пользователя × 2 − Количество выданных предупреждений × 100 + Срок регистрации пользователя в днях
- Если коэффициент ≥ 0, то считаем, что форум доверяет пользователю.

Необходимо решить задачу с помощью классов:
- Следует реализовать класс TrustedUser, конструктор которого будет принимать тип User в качестве аргумента. В этом классе мы будем хранить метод getConfidenceRatio, который будет возвращать коэффициент доверия для конкретного пользователя.
- Ответственным за оценку коэффициента сделаем статический класс-хелпер ConfidenceHelper, в котором статический метод checkConfidenceRatio будет проверять, доверяет ли форум пользователю с таким коэффициентом.
- Так как потребуется рассчитать срок регистрации на форуме, необходимо написать соответствующий функционал. Как это сделать — решать вам :)
- Последним шагом является разработка небольшого приложения, которое проверяет всех пользователей в массиве users на коэффициент доверия и вернёт тех, кому мы не доверяем.
*/

// Решение:
// 1. Определяем интерфейс User
interface User {
  id: number;
  name: string;
  registerDate: Date;
  messagesCount: number;
  warningsCount: number;
}

// 2. Создаем класс TrustedUser
class TrustedUser {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  getConfidenceRatio(): number {
    const registrationDays = this.getRegistrationDays();
    return (
      this.user.messagesCount * 2 -
      this.user.warningsCount * 100 +
      registrationDays
    );
  }

  // Приватный метод для расчета срока регистрации
  private getRegistrationDays(): number {
    const now = new Date();
    const registrationDate = this.user.registerDate;
    const diff = now.getTime() - registrationDate.getTime();
    return Math.floor(diff / (1000 * 3600 * 24));
  }
}

// 3. Создаем статический класс-хелпер ConfidenceHelper
class ConfidenceHelper {
  static checkConfidenceRatio(ratio: number): boolean {
    return ratio >= 0;
  }
}

// 4. Тестовые пользователи
const users: User[] = [
  {
    id: 1,
    name: "Alice",
    registerDate: new Date("2023-01-15"),
    messagesCount: 100,
    warningsCount: 2,
  },
  {
    id: 2,
    name: "Bob",
    registerDate: new Date("2023-03-20"),
    messagesCount: 50,
    warningsCount: 5,
  },
  {
    id: 3,
    name: "Charlie",
    registerDate: new Date("2023-05-01"),
    messagesCount: 200,
    warningsCount: 0,
  },
  {
    id: 4,
    name: "David",
    registerDate: new Date("2024-01-01"),
    messagesCount: 10,
    warningsCount: 1,
  },
  {
    id: 5,
    name: "Eve",
    registerDate: new Date("2022-12-10"),
    messagesCount: 5,
    warningsCount: 3,
  },
];

// 5. Приложение для проверки пользователей
function findUntrustedUsers(users: User[]): User[] {
  const untrustedUsers: User[] = [];

  for (const user of users) {
    const trustedUser = new TrustedUser(user);
    const ratio = trustedUser.getConfidenceRatio();
    if (!ConfidenceHelper.checkConfidenceRatio(ratio)) {
      untrustedUsers.push(user);
    }
  }

  return untrustedUsers;
}

// 6. Запускаем и выводим результаты
const untrustedUsers = findUntrustedUsers(users);
// Вывод результатов:
console.log("Ненадежные пользователи:");
if (untrustedUsers.length === 0) {
  console.log("Все пользователи надежные.");
} else {
  untrustedUsers.forEach((user) =>
    console.log(`${user.name} (id: ${user.id})`)
  );
}

// Объяснение работы кода:
/*
1) User Interface определяет структуру объекта пользователя: 
- Это интерфейс, а не класс.
- Он описывает контракт - какие свойства должны присутствовать у объектов, которые мы считаем пользователями.

2) class TrustedUser - хранит объект User в приватном поле user:
- Инкапсулирует логику расчета доверия и хранения информации о пользователе.

3) Метод getConfidenceRatio() вычисляет коэффициент доверия на основе данных пользователя.

4) Приватный метод getRegistrationDays() вычисляет количество дней с момента регистрации пользователя, используется только внутри TrustedUser.
- Используем private для скрытия деталей реализации, которые не должны быть доступны извне класса. Это помогает поддерживать чистоту интерфейса класса.

5) class ConfidenceHelper:
- Это класс-хелпер, который содержит только статические методы.
- Может быть вызван без создания экземпляра класса. Это полезно для вспомогательных функций, которые не зависят от состояния объекта.

6) checkConfidenceRatio() - статический метод, который проверяет, является ли коэффициент доверия достаточным.

7) Тестовые данные: Массив users содержит несколько объектов, представляющих пользователей с разными данными.

8) function findUntrustedUsers() проходит по массиву пользователей:
- Для каждого пользователя создает экземпляр TrustedUser.
- Вычисляет коэффициент доверия с помощью getConfidenceRatio().
- Проверяет коэффициент доверия с помощью ConfidenceHelper.

9) checkConfidenceRatio().
- Если коэффициент доверия отрицательный, добавляет пользователя в массив untrustedUsers.
- Возвращает массив ненадежных пользователей.

10) Вывод результатов: Выводит список ненадежных пользователей в консоль.
*/
