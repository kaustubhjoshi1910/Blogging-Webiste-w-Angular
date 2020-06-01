import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let firstchar = value.substring(0,1);
    let allother = value.substring(1,value.length);

    let newValue = firstchar.toUpperCase()  + allother.toLowerCase();
    return newValue;
  }

}
