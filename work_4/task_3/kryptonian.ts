import { Human } from "./human";
import { CanRun } from "./can-run";
import { CanSwim } from "./can-swim";
import { CanFly } from "./can-fly";

export class Kryptonian extends Human implements CanRun, CanSwim, CanFly {
  run(): void {
    console.log("Криптонец бежит быстрее пули!");
  }

  swim(): void {
    console.log("Криптонец свободно плавает в океане.");
  }

  fly(): void {
    console.log("Криптонец парит в небе словно птица!");
  }
}

// Описание:
/*
Класс Kryptonian: 
- Наследуется от Human и реализует все три интерфейса (CanRun, CanSwim, CanFly).
- Предоставляет конкретные реализации для run(), swim() и fly().
*/
