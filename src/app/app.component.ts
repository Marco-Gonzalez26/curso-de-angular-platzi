import { Product } from './models/product.model'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = ''
  showImage = true
  products: Product[] = [
    {
      id: 1,
      name: 'Automovil de juguete',
      price: 100,
      image:
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80'
    },
    {
      id: 2,
      name: 'Muñeca de trapo',
      price: 180,
      image:
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80'
    },
    {
      id: 3,
      name: 'Pelota de futbol',
      price: 120,
      image:
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=865&q=80'
    }
  ]
  onLoaded(img: string) {
    console.log('loaded padre', img)
  }

  toggleImage() {
    this.showImage = !this.showImage
  }
}
