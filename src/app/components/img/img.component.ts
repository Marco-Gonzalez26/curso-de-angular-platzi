import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core'

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent
  implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
  constructor() {
    // before render -- NO ASYNC -- one time
    console.log('constructor', 'imgValue =>', this.img)
  }

  img: string = ''

  @Input('img')
  set changeImg(newImage: string) {
    this.img = newImage
    console.log('change just image', this.img)
  }
  @Input() alt: string = ''
  defaultImg =
    'https://apod.nasa.gov/apod/image/2301/Arp274_HubbleOzsarac_2386.jpg'

  @Output() loaded = new EventEmitter<string>()
  counter = 0
  counterInterval: number | undefined
  ngOnInit() {
    // before render
    // async things, fetch - promises etc - runs one time
    console.log('ngOnInit')

    this.counterInterval = window.setInterval(() => {
      this.counter += 1
      console.log('run counter')
    }, 1000)
  }
  ngOnChanges(changes: SimpleChanges): void {
    // before render - during
    // changes inputs - n times
    console.log('onChanges')
    console.log({ changes })
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit', 'img value => ', this.img)
  }

  ngOnDestroy() {
    // delete component
    console.log('onDestroy event')

    window.clearInterval(this.counterInterval)
  }

  imgError() {
    class ImgError extends Error {
      constructor(name: string) {
        super(name)
      }
    }
    const imgError = new ImgError('Image not Found')
    this.img = this.defaultImg
    console.log(imgError)
  }

  imgLoaded() {
    console.log('loaded')
    this.loaded.emit(this.img)
  }
}
