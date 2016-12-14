import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  @Output() type = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.type.emit('');
  }

}
