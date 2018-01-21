"use strict";

export const STORE = {
  BOOK_A: '清华书店',
  BOOK_B: '北大书店',
  BOOK_C: '58书店',
  BOOK_D: '赶集书店',
};

export const USER_LEVEL = {
  SENIOR: 'senior',
  JUNIOR: 'junior'
};

export const DISCOUNTS = {
  [STORE.BOOK_A]: [{
    price: 100,
    discountPrice: 20
  }, {
    price: 200,
    discountPrice: 30
  }, {
    price: 300,
    discountPrice: 40
  }, {
    price: 400,
    discountPrice: 50
  }, {
    userLevel: USER_LEVEL.SENIOR,
    price: 800,
    discountPrice: 100
  }],
  [STORE.BOOK_B]: [{
    price: 800,
    discountPrice: 300,
    userLevel: USER_LEVEL.SENIOR,
  }, {
    price: 700,
    discountPrice: 200
  }, {
    price: 600,
    discountPrice: 150
  }, {
    price: 500,
    discountPrice: 100
  }, {
    price: 400,
    discountPrice: 80
  }, {
    price: 300,
    discountPrice: 50
  }],
  [STORE.BOOK_C]: [{
    price: 100,
    discountPrice: 10,
    userLevel: USER_LEVEL.JUNIOR,
  }, {
    price: 100,
    discountPrice: 20,
    userLevel: USER_LEVEL.SENIOR,
  }],
  [STORE.BOOK_D]: []
};