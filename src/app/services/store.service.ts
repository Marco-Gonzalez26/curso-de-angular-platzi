import { Product } from './../models/product.model'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private shoppingCart: Product[] = []

  constructor() {}

  addProduct(product: Product) {
    this.shoppingCart.push(product)
  }

  getTotal() {
    return this.shoppingCart.reduce((sum, item) => sum + item.price, 0)
  }

  getShoppingCart() {
    return this.shoppingCart
  }
}
