import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = [] // {}

  constructor() { }

  addToCart(product) {
    // this.items[product.name]
    //   ? this.items[product.name]++
    //   : this.items[product.name] = 1
    this.items.push(product)
  }

  removeFromCart(product) {
    // this.items[product.name] > 0
    //   ? this.items[product.name]--
    //   : window.alert("Not in Cart")
    let itemIdx = this.items.indexOf(product)
      itemIdx > -1
      ? this.items = this.items.filter(itemIdx)
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