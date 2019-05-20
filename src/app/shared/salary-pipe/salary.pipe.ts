import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value +' 000';
  }

}
