import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = {}

  constructor() { }

  addToCart(product) {
    this.items[product]
      ? this.items[product]++
      : this.items[product] = 1
  }

  removeFromCart(product) {
    this.items[product] > 0
      ? this.items[product]--
      : window.alert("Not in Cart")
  }

  getItems() {
    return this.items
  }

  clearCart() {
    this.items = {}
    return this.items
  }
}