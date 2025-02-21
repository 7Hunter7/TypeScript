import { Human } from "./human";
import { CanRun } from "./can-run";

export class NibiruAthlete extends Human implements CanRun {
  run(): void {
    console.log("Атлет Нибиру бегает со сверхзвуковой скоростью!");
  }

  swim(): void {
    throw new Error("Атлеты Нибиру не умеют плавать!");
  }

  fly(): void {
    throw new Error("Атлеты Нибиру не могут летать!");
  }
}

// Описание:
/*
Класс NibiruAthlete:
- Наследуется от Human и реализует только интерфейс CanRun.
- Предоставляет конкретную реализацию для run(), но выдает ошибку, если кто-то попытается вызвать swim() или fly().
*/
