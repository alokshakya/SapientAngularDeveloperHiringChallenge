import { Pipe, PipeTransform } from '@angular/core';
import { GameInterface } from '../interfaces/game-interface';
@Pipe({
  name: 'platform',
  pure:false
})
export class PlatformPipe implements PipeTransform {

  transform(value: GameInterface[], filterObj:Object ): GameInterface[] {
    if(!value){
      //console.log('returning empty array because no value');
      return [];
    } 
    if(!filterObj){
      //console.log('returning empty array because no filterObj');
      return value;
    } 
    if(filterObj['Clear All']){
      //console.log('returning full array because of Clear All true');
      return value;
    }
    //check if no one selected even Clear All not selected then return all
    let flag:boolean=false;
    for(let key in filterObj){
      if(filterObj[key]){
        flag=true;
        break;
      }
    }
    if(!flag){
      return value;
    }
    //console.log('now going to filter given array');
    return value.filter(element =>{
      //console.log('printing element platform condition',filterObj[element['platform']]);
      if(filterObj[element['platform']]){
        return element;
      }
    });
  }

}
