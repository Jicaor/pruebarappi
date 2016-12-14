import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, filterField): any {
    if(filterField == "greater30")
      return value.filter((item)=> parseInt(item.price.replace(".", "")) > 30000 );
    else if(filterField == "lower10")
      return value.filter((item)=> parseInt(item.price.replace(".", "")) < 10000 );
    else
      return value;

  }

}
