import { Pipe, PipeTransform } from '@angular/core';
import { GameInterface } from '../interfaces/game-interface';
@Pipe({
  name: 'genre',
  pure:false
})
export class GenrePipe implements PipeTransform {

  
  transform(value: GameInterface[], genreObj:Object ): GameInterface[] {
    if(!value){
      return [];
    } 
    if(!genreObj){
      return value;
    } 
    if(genreObj['Clear All']){
      return value;
    }
    //check if no one selected even Clear All not selected then return all
    let flag:boolean=false;
    for(let key in genreObj){
      if(genreObj[key]){
        flag=true;
        break;
      }
    }
    if(!flag){
      return value;
    }
    //console.log('now going to filter given array');
    return value.filter(element =>{
      if(genreObj[element.genre]){
        return element;
      }
    });
  }

}
