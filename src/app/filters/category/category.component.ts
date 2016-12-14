import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() categories;
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.select.emit('');
  }

}
