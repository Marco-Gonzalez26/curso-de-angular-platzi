import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Product } from 'src/app/models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    image: '',
    name: '',
    price: 0
  }
  @Output() addedProductToCart = new EventEmitter<Product>()

  onAddToCart() {
    this.addedProductToCart.emit(this.product)
  }
}
