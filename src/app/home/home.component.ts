import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from './../productos/producto';
import { Categoria } from './../productos/categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ProductosService]
})

export class HomeComponent implements OnInit {

  shopping_car = [];

  categorias:any;
  productos: any;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productosService.getJson()
        .then(respuesta => this.categorias = respuesta.categories.map(data => new Categoria(data['categori_id'], data['name'])));

    this.productosService.getJson()
        .then(respuesta => this.productos = respuesta.products.map(
            data => new Producto(data['id'], data['name'], data['price'], data['available'], data['best_seller'], data['categories'], data['img'], data['description'], 0)));
  }

  addToShoppindCart(producto_escogido):void{

    var indice = this.shopping_car.indexOf(producto_escogido.producto);

    if(indice != -1){
        this.shopping_car[indice].cantidad = parseInt(this.shopping_car[indice].cantidad) + 1;
    }else{
      producto_escogido.producto.cantidad = 1;
      this.shopping_car.push(producto_escogido.producto);
    }
  }

  deleteProduct(producto_borrado){
    var indice = this.shopping_car.indexOf(producto_borrado.producto);
    producto_borrado.producto.cantidad = 0;
    this.shopping_car.splice(indice,1);
  }

  setUpProduct(producto_aumentado){
    var indice = this.shopping_car.indexOf(producto_aumentado.producto);
    producto_aumentado.producto.cantidad++;
    this.shopping_car[indice].cantidad = producto_aumentado.producto.cantidad;
  }

  setDownProduct(producto_disminuido){
    var indice = this.shopping_car.indexOf(producto_disminuido.producto);
    if(parseInt(this.shopping_car[indice].cantidad) != 1){
      producto_disminuido.producto.cantidad--;
      this.shopping_car[indice].cantidad = producto_disminuido.producto.cantidad;
    }
  }

}
