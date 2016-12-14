import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Output() price = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.price.emit('');
  }
}
