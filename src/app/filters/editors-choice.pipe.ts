import { Pipe, PipeTransform } from '@angular/core';
import { GameInterface } from '../interfaces/game-interface';
@Pipe({
  name: 'editors_choice',
  pure:false
})
export class EditorsChoicePipe implements PipeTransform {

  
  transform(value: GameInterface[], editors_choiceObj:Object ): GameInterface[] {
    if(!value){
      return [];
    } 
    if(!editors_choiceObj){
      return value;
    } 
    if(editors_choiceObj['Clear All']){
      return value;
    }
    //check if no one selected even Clear All not selected then return all
    let flag:boolean=false;
    for(let key in editors_choiceObj){
      if(editors_choiceObj[key]){
        flag=true;
        break;
      }
    }
    if(!flag){
      return value;
    }
    //console.log('now going to filter given array');
    return value.filter(element =>{
      if(editors_choiceObj[element.editors_choice]){
        return element;
      }
    });
  }

}
