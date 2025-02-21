import { Job } from "./job";

export class Person {
  constructor(private name: string, private job: Job | null = null) {}

  getName(): string {
    return this.name;
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
/*
Класс Person представляет сотрудника:
- constructor(private name: string, private job: Job | null = null) {} - конструктор для инициализации полей name и job;
- name - приватное поле для хранения имени сотрудника (строка);
- job - приватное поле для хранения объекта Job, представляющего текущую профессию сотрудника. Может быть null, если у человека нет работы;
-  getName() - геттер, предоставляет контролируемый доступ к значению name;
- setJob(job: Job) - сеттер для установки текущей профессии сотрудника;
- getSalary() - метод, возвращающий зарплату сотрудника. Если у сотрудника нет работы (job равен null), возвращает 0;
- work() - метод, заставляющий сотрудника выполнять свою работу. Вызывает метод work() объекта Job, если у сотрудника есть работа, иначе выводит сообщение о том, что сотрудник безработный.
*/
