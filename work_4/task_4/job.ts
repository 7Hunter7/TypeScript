export class Job {
  constructor(private role: string | null, private salary: number | null) {}

  getSalary(): number | null {
    return this.salary;
  }

  work(personName: string): void {
    if (this.role === null) {
      console.log(`${personName} в данный момент безработный.`);
      return;
    }
    console.log(`${personName} сейчас работает как ${this.role}`);
  }
}

// Описание:
/*
Класс Job представляет профессию:
- role - приватное поле для хранения названия профессии (строка).
- salary - приватное поле для хранения зарплаты (число).
- cconstructor(private role: string | null, private salary: number | null) {} - конструктор для инициализации приватных полей role и salary.
- getSalary(): number | null - геттер для получения зарплаты. Если  возвращает null, это сигнализирует об отсутствии зарплаты. 
- work(personName: string) - метод, выводящий в консоль сообщение о том, что человек работает по данной профессии.
- if (this.role === null) - проверка: 
Если role равно null, метод work выводит сообщение о безработице и прекращает выполнение. getSalary тоже возвращает null, что сигнализирует об отсутствии зарплаты. 

Поля role и salary объявляются и инициализируются только в конструкторе, используя shorthand syntax. Это более лаконичный и общепринятый способ объявления и инициализации приватных полей класса в TypeScript. Спецификатор доступа private перед именем параметра конструктора автоматически создает приватное поле с таким именем и присваивает ему значение переданного аргумента.
*/
