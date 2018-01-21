"use strict";
import { Discount } from "./discount";
import { DISCOUNTS, STORE, USER_LEVEL } from "./store";

const getDiscounts = (storeName, userLevel) => DISCOUNTS[storeName]
  .filter(discount => discount.userLevel === undefined || discount.userLevel === userLevel)
  .sort((prev, next) => prev.price - next.price);

const getDiscount = (storeName, userLevel) => getDiscounts(storeName, userLevel)
  .reduce((discount, discountMeta) => discount.after(new Discount(discountMeta)), new Discount(0, 0));

const calculate = (user, storeName, price) => {
  const discount = getDiscount(storeName, user.level);
  const actualPrice = discount.calculate(price);
  console.log(`${storeName}: Total $${price}, actually pay $${actualPrice} for ${user.name}`);
};

const james = { name: 'James', level: USER_LEVEL.SENIOR };
const kayla = { name: 'Kayla', level: USER_LEVEL.JUNIOR };

calculate(james, STORE.BOOK_A, 1000);
calculate(kayla, STORE.BOOK_A, 1000);

calculate(james, STORE.BOOK_C, 1000);
calculate(kayla, STORE.BOOK_C, 1000);
