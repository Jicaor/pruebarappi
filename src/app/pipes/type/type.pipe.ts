import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../../productos/producto';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(value: any, filterField): Producto[] {

    if(filterField == "available")
        return value.filter((item)=> item.available == true);
      else if(filterField == "not-available")
        return value.filter((item)=> item.available == false);
      else if(filterField == "best-seller")
        return value.filter((item)=> item.best_seller == true);
      else
        return value;
  }

}
