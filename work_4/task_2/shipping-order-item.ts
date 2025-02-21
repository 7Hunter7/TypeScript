import { OrderItem } from "./order-item";
import { Product } from "./product";

export class ShippingOrderItem extends OrderItem {
  private _shippingCostPerItem: number; // Стоимость доставки за одну единицу товара

  constructor(product: Product, quantity: number, shippingCostPerItem: number) {
    super(product, quantity);
    this._shippingCostPerItem = shippingCostPerItem;
  }

  get shippingCostPerItem(): number {
    return this._shippingCostPerItem;
  }

  set shippingCostPerItem(value: number) {
    this._shippingCostPerItem = value;
  }
  // Метод рассчета общей стоимости товара с учетом стоимости доставки за каждую единицу товара
  getCost(): number {
    return (
      this.product.price * this.quantity +
      this.shippingCostPerItem * this.quantity
    );
  }

  log(): void {
    super.log();
    console.log(
      `Стоимость доставки за единицу товара: ${this.shippingCostPerItem}`
    );
  }
}
