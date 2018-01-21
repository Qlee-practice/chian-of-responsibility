"use strict";
import { Discount } from "./discount";

const discountData = [{
  price: 500, discountPrice: 50
}, {
  price: 800, discountPrice: 100
}, {
  price: 1000, discountPrice: 150
}];

const discount = totalPrice => {
  return discountData
    .reduce((discountChain, { price, discountPrice }) => discountChain.setPrevious(new Discount(price, discountPrice)), new Discount(0, 0))
    .calculate(totalPrice);
};

const calculate = price => {
  console.log(`Total $${price}, actually pay $${discount(price)}`);
};

calculate(1000);
calculate(900);
calculate(800);
calculate(700);
calculate(600);
calculate(500);
calculate(400);