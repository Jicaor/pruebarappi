import { Component, OnInit, Input, Output, EventEmitter, trigger, keyframes, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-shoppping-car',
  templateUrl: './shoppping-car.component.html',
  styleUrls: ['./shoppping-car.component.css'],
  animations: [
    trigger('animState', [
      transition('in => out, out => in', animate(500, keyframes([
        style({transform: 'scale(1.3)', offset: .40}),
        style({transform: 'scale(1)', offset: 1}),
      ]))),
    ]),
    trigger('animStateCheck', [
      transition('in => out, out => in', animate(600, keyframes([
        style({bottom: '150px', offset: .30}),
        style({bottom: '-50px', offset: 1}),
      ]))),
    ])
  ]
})
export class ShopppingCarComponent implements OnInit {

  @Input() products_car;
  @Output() aumentar = new EventEmitter();
  @Output() disminuir = new EventEmitter();
  @Output() borrar = new EventEmitter();

  stateCar:string = "in";
  stateCheck:string = "in";

  lengthProducts:number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    if(this.products_car.length > this.lengthProducts){
      if(this.stateCar === "in"){
        this.stateCar = "out";
        this.stateCheck = "out";
      }else{
        this.stateCar = "in";
        this.stateCheck = "in";
      }
      this.lengthProducts = this.products_car.length;
    }
  }

  sendToDeleteProduct(producto_borrado):void{
    this.lengthProducts = this.products_car.length - 1;
    this.borrar.emit({producto: producto_borrado});
  }

  sendToUpProduct(producto_aumentado):void{
    this.aumentar.emit({producto: producto_aumentado});
  }

  sendToDownProduct(producto_disminuido):void{
    this.disminuir.emit({producto: producto_disminuido});
  }

}
