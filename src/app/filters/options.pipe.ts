import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'options'
})
export class OptionsPipe implements PipeTransform {

  transform(value: any[], search:string): any[] {
    if(!value) return [];
    if(!search) return value;

    return value.filter( element => {
      return element.toString().substr(0,search.length).toLowerCase() == search.toLowerCase();
    })
  }

}
