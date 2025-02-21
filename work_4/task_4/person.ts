import { Job } from "./job";

export class Person {
  private job: Job | null = null; // Job может быть null, если у человека нет работы
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  setJob(job: Job): void {
    this.job = job;
  }

  getSalary(): number {
    if (this.job) {
      return this.job.getSalary();
    } else {
      return 0;
    }
  }

  work(): void {
    if (this.job) {
      this.job.work(this.name);
    } else {
      console.log(`${this.name} сейчас безработный.`);
    }
  }
}

// Описание:
/* Класс Person представляет сотрудника:
- job - приватное поле для хранения объекта Job, представляющего текущую профессию сотрудника. Может быть null, если у человека нет работы.
- name - приватное поле для хранения имени сотрудника (строка).
- constructor(name: string) - конструктор для инициализации поля name.
- setJob(job: Job) - сеттер для установки текущей профессии сотрудника.
- getSalary() - метод, возвращающий зарплату сотрудника. Если у сотрудника нет работы (job равен null), возвращает 0.
- work() - метод, заставляющий сотрудника выполнять свою работу. Вызывает метод work() объекта Job, если у сотрудника есть работа, иначе выводит сообщение о том, что сотрудник безработный.
*/
