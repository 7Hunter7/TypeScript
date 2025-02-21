import { OrderItem } from "./order-item";
import { Product } from "./product";

export class PercentageDiscountOrderItem extends OrderItem {
  private _discountPercentage: number; // Величина процентной скидки
  private _minQuantityForDiscount: number; // Минимальное количество товара для применения скидки

  constructor(
    product: Product,
    quantity: number,
    discountPercentage: number,
    minQuantityForDiscount: number
  ) {
    super(product, quantity);
    this._discountPercentage = discountPercentage;
    this._minQuantityForDiscount = minQuantityForDiscount;
  }

  get discountPercentage(): number {
    return this._discountPercentage;
  }

  set discountPercentage(value: number) {
    this._discountPercentage = value;
  }

  get minQuantityForDiscount(): number {
    return this._minQuantityForDiscount;
  }

  set minQuantityForDiscount(value: number) {
    this._minQuantityForDiscount = value;
  }

  // Метод рассчета стоимости товара с учетом процентной скидки и минимального количества
  getCost(): number {
    let cost = this.product.price * this.quantity;
    // Если минимальное количество достигнуто, то применяется процентная скидка:
    if (this.quantity >= this.minQuantityForDiscount) {
      cost = cost * (1 - this.discountPercentage / 100); // Процентная скидка
    }
    return Math.floor(cost); // Итоговая стоимость, округленная в меньшую сторону до целого числа
  }

  log(): void {
    super.log();
    console.log(
      `Процентная скидка: ${this.discountPercentage}%. Минимальное количество для получения скидки: ${this.minQuantityForDiscount}`
    );
  }
}
