import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../../productos/producto';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, filterField): Producto[] {
    if(filterField == "greater30")
          return value.filter((item)=> parseInt(item.price.replace(".", "")) > 30000 );
    else if(filterField == "lower10")
      return value.filter((item)=> parseInt(item.price.replace(".", "")) < 10000 );
    else
      return value;

  }

}
