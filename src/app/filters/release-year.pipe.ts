import { Pipe, PipeTransform } from '@angular/core';
import { GameInterface } from '../interfaces/game-interface';
@Pipe({
  name: 'release_year',
  pure:false
})
export class ReleaseYearPipe implements PipeTransform {

  
  transform(value: GameInterface[], release_yearObj:Object ): GameInterface[] {
    if(!value){
      return [];
    } 
    if(!release_yearObj){
      return value;
    } 
    if(release_yearObj['Clear All']){
      return value;
    }
    //check if no one selected even Clear All not selected then return all
    let flag:boolean=false;
    for(let key in release_yearObj){
      if(release_yearObj[key]){
        flag=true;
        break;
      }
    }
    if(!flag){
      return value;
    }
    //console.log('now going to filter given array');
    return value.filter(element =>{
      if(release_yearObj[element.release_year]){
        return element;
      }
    });
  }

}
