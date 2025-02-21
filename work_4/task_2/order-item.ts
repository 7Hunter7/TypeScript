import { Product } from "./product";

export abstract class OrderItem {
  private _product: Product;
  private _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  log(): void {
    this.product.log();
    console.log(`Quantity: ${this.quantity}`);
  }

  abstract getCost(): number;

  compare(other: OrderItem): number {
    const cost1 = this.getCost();
    const cost2 = other.getCost();

    if (cost1 < cost2) {
      return 1;
    } else if (cost1 > cost2) {
      return -1;
    } else {
      return 0;
    }
  }
}
