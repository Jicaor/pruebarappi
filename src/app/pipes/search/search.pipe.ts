import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../../productos/producto';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): Producto[] {
    if(args.length == 0 || args == 0){
      return value;
    }else{
      return value.filter((item)=> item.name.toUpperCase().startsWith(args.toUpperCase()));
    }
  }

}

