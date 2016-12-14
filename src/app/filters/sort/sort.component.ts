import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})

export class SortComponent implements OnInit {

  @Output() sort = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.sort.emit('');
  }

}
