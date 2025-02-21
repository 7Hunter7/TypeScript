import { CanRun } from "./can-run";
import { CanSwim } from "./can-swim";
import { CanFly } from "./can-fly";

export abstract class Human implements CanRun, CanSwim, CanFly {
  abstract run(): void;
  abstract swim(): void;
  abstract fly(): void;
}

// Описание:
/*
Абстрактный класс Human: 
- Реализует все три интерфейса (CanRun, CanSwim, CanFly), но не предоставляет никакой конкретной реализации методов run(), swim(), fly().
- Вместо этого, он объявляет их как abstract. Это означает, что любой класс, наследующийся от Human, обязан предоставить конкретные реализации этих методов.
*/
