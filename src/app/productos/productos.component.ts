import { Component, OnInit, Input, ViewEncapsulation,  Output, EventEmitter } from '@angular/core';
import { Producto } from "./producto";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  @Input() producto : Producto;
  @Output() seleccionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendToShoppingCar(producto_comprado):void{
    this.seleccionado.emit({producto: producto_comprado});
  }
}
