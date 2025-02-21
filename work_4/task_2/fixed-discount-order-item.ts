import { OrderItem } from "./order-item";
import { Product } from "./product";

export class FixedDiscountOrderItem extends OrderItem {
  private _discount: number; // Фиксированная скидка текущего заказа

  constructor(product: Product, quantity: number, discount: number) {
    super(product, quantity);
    this._discount = discount;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    this._discount = value;
  }
  // Метод для рассчета стоимости заказа с учетом фиксированной скидки на продукт
  getCost(): number {
    return (this.product.price - this.discount) * this.quantity;
  }

  log(): void {
    super.log();
    console.log(`Фиксированная скидка: ${this.discount}`);
  }
}
