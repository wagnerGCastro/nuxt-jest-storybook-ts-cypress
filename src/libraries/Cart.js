import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js';

const Money = Dinero;
Money.defaultCurrency = 'BRL';
Money.defaultPrecision = 2;

export default class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };

    if (itemToFind) {
      if (find(this.items, itemToFind)) {
        remove(this.items, itemToFind);
      }
      this.items.push(item);
    }
  }

  remove(product) {
    remove(this.items, { product });
  }

  getTotal() {
    return this.items.reduce((acc, { condition, product, quantity }) => {
      const isEven = quantity % 2 === 0;
      const amount = Money({ amount: quantity * product.price });
      let discount = Money({ amount: 0 });

      // // Calculate Percentage Discount
      // if (item.condition?.percentage && item.quantity > item.condition.minimum) {
      //   discount = amount.percentage(item.condition.percentage)
      // }
      // // Calculate Quantity Discount
      // else if (item.condition?.quantity && item.quantity > item.condition.quantity) {
      //   discount = amount.percentage(isEven ? 50 : 40)
      // }

      if (condition) {
        const list = Array.isArray(condition) ? condition : [condition];

        const [heigherDiscount] = list
          .map((c) => {
            let result = [discount];

            // Calculate Quantity Discount
            if (c.percentage && quantity > c.minimum) {
              result = amount.percentage(c.percentage).getAmount();
            }
            // Calculate Quantity Discount
            else if (c.quantity && quantity > c.quantity) {
              result = amount.percentage(isEven ? 50 : 40).getAmount();
            }

            return result;
          })
          .sort((a, b) => b - a);

        discount = Money({ amount: heigherDiscount });
      }

      return acc.add(amount).subtract(discount);
    }, Money({ amount: 0 }));
  }

  summary() {
    const total = this.getTotal();
    const formatted = total.toFormat('$0,0.00');
    const items = this.items;

    return {
      total: total.getAmount(),
      formatted,
      items,
    };
  }

  checkout() {
    const { total, items } = this.summary();
    this.items = [];

    return {
      total,
      items,
    };
  }
}
