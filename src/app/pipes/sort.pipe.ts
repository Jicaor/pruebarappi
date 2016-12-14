import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortPipe implements PipeTransform {

  transform(value: any, orderField): any {
    if(orderField == "original")
      return value.sort(function(a,b) {
        var x = parseInt(a.id);
        var y = parseInt(b.id);
        return x < y ? -1 : x > y ? 1 : 0;
      });
    else if (orderField == "name")
      return value.sort(function(a,b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    else if (orderField == "highToLowPrice")
      return value.sort(function(a,b) {
        var x = parseInt(a.price.replace(".", ""));
        var y = parseInt(b.price.replace(".", ""));
        return x < y ? 1 : x > y ? -1 : 0;
      });
    else if (orderField == "lowToHighPrice")
      return value.sort(function(a,b) {
        var x = parseInt(a.price.replace(".", ""));
        var y = parseInt(b.price.replace(".", ""));
        return x < y ? -1 : x > y ? 1 : 0;
      });
    else return value;
  }
}