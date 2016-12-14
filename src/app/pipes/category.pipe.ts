import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args.length == 0 || args == 0){
      return value;
    }else{
      return value.filter((item)=> item.categories.indexOf(parseInt(args)) != -1);
    }
  }

}