import { Pipe, PipeTransform } from '@angular/core';
import { GameInterface } from '../interfaces/game-interface';
@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  
  transform(value: GameInterface[], sortObj:unknown ): GameInterface[] {
    if(!value){
      return [];
    } 
    if(!sortObj){
      return value;
    } 
    
    // let t=[{a:1,b:"a"},{a:5,b:"r"},{a:3,b:"t"}];
    // t.sort((a,b) => (a.a < b.a) ? 1 : -1);
    // t; // asc order
    //console.log('now going to sort given array');
    //console.log('sortObj in pipe ',sortObj);
    if(sortObj['ascending']){
      //console.log('now going to sort asc given array');
      return value.sort((a,b) => (a.score < b.score)? 1:-1);
    }
    if(sortObj['descending']){
      //console.log('now going to sort dsc given array');
      value.sort((a,b) => (a.score > b.score)? 1:-1);
      return value;
    }
    //console.log('no one selected return all');
    return value; // if no one selected return all
  }

}
