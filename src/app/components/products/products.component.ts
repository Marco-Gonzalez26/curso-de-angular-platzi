import { Component, Input } from '@angular/core'
import { Product } from 'src/app/models/product.model'

import { StoreService } from '../../services/store.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  // Obtain input products from the father
  @Input() products: Product[] = []

  // Define the total price variables
  total = 0

  // Define the shopping cart list
  shoppingCart: Product[] = []

  // Inject the storeService on the constructor
  // to use it, inside the component
  constructor(private storeService: StoreService) {
    this.shoppingCart = this.storeService.getShoppingCart()
  }

  // Listen the "click" method to add the product to the cart
  onAddToCart(product: Product) {
    this.storeService.addProduct(product)
    this.total = this.storeService.getTotal()
  }
}
