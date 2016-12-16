import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shoppping-car',
  templateUrl: './shoppping-car.component.html',
  styleUrls: ['./shoppping-car.component.css']
})
export class ShopppingCarComponent implements OnInit {

  @Input() products_car;
  @Output() aumentar = new EventEmitter();
  @Output() disminuir = new EventEmitter();
  @Output() borrar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToDeleteProduct(producto_borrado):void{
    this.borrar.emit({producto: producto_borrado});
  }

  sendToUpProduct(producto_aumentado):void{
    this.aumentar.emit({producto: producto_aumentado});
  }

  sendToDownProduct(producto_disminuido):void{
    this.disminuir.emit({producto: producto_disminuido});
  }

}
