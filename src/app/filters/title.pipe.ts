import { Pipe, PipeTransform } from '@angular/core';
import { GameInterface } from '../interfaces/game-interface';
import { element } from 'protractor';
@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: GameInterface[], search:string): GameInterface[] {
    if(!value) return [];
    if(!search) return value;

    return value.filter( element => {
      return element.title.toString().toLowerCase().includes(search.toLowerCase()); // use this line for text not actual value
    })
  }

}
