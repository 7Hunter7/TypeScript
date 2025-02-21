export class Job {
  constructor(private role: string, private salary: number) {}

  getSalary(): number {
    return this.salary;
  }

  work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`);
  }
}

// Описание:
/*
Класс Job представляет профессию:
- role - приватное поле для хранения названия профессии (строка).
- salary - приватное поле для хранения зарплаты (число).
- constructor(private role: string, private salary: number) {} - конструктор для инициализации приватных полей role и salary.
- getSalary(): number - геттер для получения зарплаты.
- work(personName: string) - метод, выводящий в консоль сообщение о том, что человек работает по данной профессии.

Поля role и salary объявляются и инициализируются только в конструкторе, используя shorthand syntax. Это более лаконичный и общепринятый способ объявления и инициализации приватных полей класса в TypeScript. Спецификатор доступа private перед именем параметра конструктора автоматически создает приватное поле с таким именем и присваивает ему значение переданного аргумента.
*/
