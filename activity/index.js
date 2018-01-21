"use strict";
import {Discount} from "./discount";

const discount = totalPrice => {
  const discountChain = (new Discount(1000, 150))
    .after(new Discount(800, 100))
    .after(new Discount(500, 50))
    .after(new Discount(0, 0));
  return discountChain.calculate(totalPrice);
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