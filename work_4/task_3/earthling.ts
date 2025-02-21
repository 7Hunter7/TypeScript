import { Human } from "./human";
import { CanRun } from "./can-run";
import { CanSwim } from "./can-swim";

export class Earthling extends Human implements CanRun, CanSwim {
  run(): void {
    console.log("Землянин бегает в своём темпе.");
  }

  swim(): void {
    console.log("Землянин плавает вольным стилем.");
  }

  fly(): void {
    throw new Error("Земляне не умеют летать!");
  }
}

// Описание:
/*
Класс Earthling:
- Наследуется от Human и реализует интерфейсы CanRun и CanSwim.
- Предоставляет конкретные реализации для run() и swim().
*/
