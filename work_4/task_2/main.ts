import { Product } from "./product";
import { FixedDiscountOrderItem } from "./fixed-discount-order-item";
import { PercentageDiscountOrderItem } from "./percentage-discount-order-item";
import { ShippingOrderItem } from "./shipping-order-item";
import { OrderItem } from "./order-item";

// Создание продуктов
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Mouse", 25);
const product3 = new Product("Keyboard", 75);
const product4 = new Product("Monitor", 300);
const product5 = new Product("Headphones", 100);
const product6 = new Product("Webcam", 50);

// Создание заказов
const order1 = new FixedDiscountOrderItem(product1, 1, 100);
const order2 = new FixedDiscountOrderItem(product2, 5, 5);
const order3 = new PercentageDiscountOrderItem(product3, 20, 10, 15);
const order4 = new PercentageDiscountOrderItem(product4, 10, 5, 10);
const order5 = new ShippingOrderItem(product5, 2, 10);
const order6 = new ShippingOrderItem(product6, 3, 5);

// Создание массива заказов
const orders: OrderItem[] = [order1, order2, order3, order4, order5, order6];

// Вывод несортированных элементов заказа
console.log("--- Несортированные заказы ---");
orders.forEach((order) => {
  order.log();
  console.log(`Стоимость заказа: ${order.getCost()}`);
  console.log("---");
});

// Сортировка заказов
orders.sort((a, b) => a.compare(b));

// Вывод отсортированных элементов заказа
console.log("--- Отсортированные заказы ---");
orders.forEach((order) => {
  order.log();
  console.log(`Стоимость заказа: ${order.getCost()}`);
  console.log("---");
});

// Описание:
/*
1) Импорты:
- Импортируем все необходимые классы из соответствующих файлов.
- Это позволяет использовать эти классы в текущем файле.

2) Создание продуктов:
- Создаем несколько экземпляров класса Product с разными именами и ценами.
- Эти продукты будут использоваться для создания элементов заказа.

3) Создание элементов заказа:
- Создаем экземпляры различных классов элементов заказа (FixedDiscountOrderItem, PercentageDiscountOrderItem, ShippingOrderItem), используя созданные продукты и задавая соответствующие параметры (количество, скидка, стоимость доставки и т. д.).

4) Создание массива элементов заказа:
- Создаем массив orders типа OrderItem[], который содержит все созданные элементы заказа.
- Типизация OrderItem[] говорит о том, что массив может содержать объекты класса OrderItem и всех его подклассов (поскольку подклассы являются “is-a” OrderItem).

5) Вывод несортированных элементов заказа:
- Выводим в консоль информацию о каждом элементе заказа в том порядке, в котором они были добавлены в массив orders:
- Выводим заголовок “Несортированные заказы”;
а) orders.forEach((order) => { ... }):
- Используем метод forEach для итерации по каждому элементу order в массиве orders;
б) order.log():
- Вызываем метод log() для текущего элемента заказа, чтобы вывести его информацию (продукт, количество, скидка, стоимость доставки и т. д.);
в) console.log(\Cost: ${order.getCost()}`):
- Вызываем метод getCost()` для текущего элемента заказа, чтобы получить его стоимость, и вывести эту стоимость в консоль;
- Выводим разделитель между информацией о каждом элементе заказа;


6) Сортировка элементов заказа:
- Сортируем массив orders по убыванию стоимости.
- orders.sort((a, b) => a.compare(b)) - используем метод sort() для сортировки массива. Функция сравнения (a, b) => a.compare(b) использует метод compare() класса OrderItem для сравнения двух элементов заказа a и b. При этом compare возвращает 1, если a дешевле b, -1 если a дороже b, и 0 если равны. Таким образом, сортировка происходит по убыванию стоимости.

7) Вывод отсортированных элементов заказа:
- Выводим в консоль информацию о каждом элементе заказа после сортировки, т.е. в порядке убывания стоимости.
- Этот код аналогичен коду вывода несортированных элементов заказа, за исключением того, что выводится отсортированный массив.
*/
