import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../services/productos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ ProductosService]
})

export class HomeComponent implements OnInit {

  shopping_car = [];
  categorias:any;
  productos:any;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProducts();
    this.categorias = this.productosService.getCategories();
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
    this.shopping_car.splice(indice,1);
  }

  setUpProduct(producto_aumentado){
    var indice = this.shopping_car.indexOf(producto_aumentado.producto);
    this.shopping_car[indice].cantidad = parseInt(this.shopping_car[indice].cantidad) + 1;
  }

  setDownProduct(producto_disminuido){
    var indice = this.shopping_car.indexOf(producto_disminuido.producto);
    if(parseInt(this.shopping_car[indice].cantidad) != 1)
      this.shopping_car[indice].cantidad = parseInt(this.shopping_car[indice].cantidad) - 1;
  }

}
