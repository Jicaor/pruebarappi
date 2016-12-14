import { Pipe, PipeTransform } from '@angular/core';
/*
 * Convert value into Colombian currency
 *
 * Usage:
 *   value | moneda
 * Example:
 *   {{ 60.000 |  modenaColombia}}
 *   formats to: $60.000
 */

@Pipe({
  name: 'monedaColombia'
})

export class MonedaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return '$ '+value;
  }

}