import { Injectable }   from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from '../../../node_modules/rxjs/Observable.d';
import 'rxjs/add/operator/toPromise';
import { Producto } from './../producto';

// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators needed for THIS app.

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductosService {

  constructor(public http: Http) {
  }

  productos = [{
    "id": 1,
    "name": "Lorem",
    "price": "60.000",
    "available": true,
    "best_seller": true,
    "categories": [
      1,
      4
    ],
    "img": "http://lorempixel.com/200/100/food/",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
  },
    {
      "id": 2,
      "name": "ipsum",
      "price": "20.000",
      "available": false,
      "best_seller": false,
      "categories": [
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 3,
      "name": "dolor",
      "price": "10.000",
      "available": true,
      "best_seller": true,
      "categories": [
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 4,
      "name": "sit",
      "price": "35.000",
      "available": false,
      "best_seller": false,
      "categories": [
        1,
        2
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 5,
      "name": "amet",
      "price": "12.000",
      "available": true,
      "best_seller": true,
      "categories": [
        1,
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 6,
      "name": "consectetur",
      "price": "120.000",
      "available": true,
      "best_seller": false,
      "categories": [
        1,
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 7,
      "name": "adipiscing",
      "price": "50.000",
      "available": false,
      "best_seller": false,
      "categories": [
        1,
        3
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 8,
      "name": "elit",
      "price": "2000",
      "available": true,
      "best_seller": false,
      "categories": [
        1,
        3
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 9,
      "name": "Maecenas",
      "price": "150.000",
      "available": true,
      "best_seller": true,
      "categories": [
        2,
        4
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    },
    {
      "id": 10,
      "name": "eu",
      "price": "200.000",
      "available": false,
      "best_seller": true,
      "categories": [
        2,
        3
      ],
      "img": "http://lorempixel.com/200/100/food/",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
    }];

  categories = [
    {
      categori_id: 1,
      name: "drinks"
    },
    {
      categori_id: 2,
      name: "lunch"
    },
    {
      categori_id: 3,
      name: "food"
    },
    {
      categori_id: 4,
      name: "sea"
    }
  ];

  ngOnInit() {
  }

  getProducts() {

    return this.productos;

  }

  getCategories() {
    return this.categories;
  }
}