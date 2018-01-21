"use strict";
import { Discount } from "./discount";
import { DISCOUNTS, STORE } from "./store";


const getDiscounts = storeName => DISCOUNTS[storeName].sort((prev, next) => prev.price - next.price);

const discount = (totalPrice, storeName) => {
  const discountChain = getDiscounts(storeName)
    .reduce((discount, { price, discountPrice }) => discount.after(new Discount(price, discountPrice)), new Discount(0, 0));
  return discountChain.calculate(totalPrice);
};


const calculate = (storeName, price) => {
  console.log(`${storeName}: Total $${price}, actually pay $${discount(price, storeName)}`);
};

calculate(STORE.BOOK_A, 1000);
calculate(STORE.BOOK_B, 900);
calculate(STORE.BOOK_C, 800);
calculate(STORE.BOOK_D, 700);
calculate(STORE.BOOK_B, 600);
calculate(STORE.BOOK_A, 500);
calculate(STORE.BOOK_C, 400);