import { Component, OnInit } from '@angular/core';
import { GameInterface } from '../../interfaces/game-interface';
import { DataService } from '../../services/data.service';
import { takeUntil } from 'rxjs/internal/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private dataService:DataService) { }
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  showSidebar:boolean=false;
  gameList:GameInterface[];
  sortObj:Object={};
  platformObj:Object={};
  genreObj:Object={};
  release_yearObj:Object={};
  editors_choiceObj:Object={};
  //ngx-pagination config
  p:number=1;
  itemsPerPage:number=50;
  titles=[];
  ngOnInit(): void {
    this.dataService.getAllGames().pipe(takeUntil(this.destroyed$)).subscribe( (res) =>{
      this.gameList = res;
      this.titles = this.gameList.map( (element) => element.title);
      console.log('titles');
      console.log(this.titles);
      this.sortObj['ascending']=false;
      this.sortObj['descending']=false;
      //before completing the object creation add one more property for none select
      this.platformObj['Clear All']=true;
      this.gameList.forEach(element => {
        if(!(this.platformObj.hasOwnProperty(element.platform))){
          //add this key to platform obj and set to false
          this.platformObj[element.platform]=false;
        }
        
      });
      
      //console.log('platformObj for filters is :',this.platformObj);
      //now pass this obj to sidebar to show filter for platform and update this object using @Output event
      this.genreObj['Clear All']=true;
      this.gameList.forEach(element => {
        if(!(this.genreObj.hasOwnProperty(element.genre))){
          this.genreObj[element.genre]=false;
        } 
      });

      this.release_yearObj['Clear All']=true;
      this.gameList.forEach(element => {
        if(!(this.release_yearObj.hasOwnProperty(element.release_year))){
          this.release_yearObj[element.release_year]=false;
        } 
      });

      this.editors_choiceObj['Clear All']=true;
      this.gameList.forEach(element => {
        if(!(this.editors_choiceObj.hasOwnProperty(element.editors_choice))){
          this.editors_choiceObj[element.editors_choice]=false;
        } 
      });
    },
    (err)=>{
      console.log(err);
    });
  }

  toggleSidebar(event:boolean){
    //console.log('received event in main event : '+event);
    this.showSidebar = event;
  }
  updateSortObjFromSidebar(event:any){

    this.sortObj = event;
    //console.log('sortObj updated in main ',this.sortObj);
  }
  updatePlatformObjFromSidebar(event:any){

    this.platformObj = event;
    //console.log('platformObj updated in main ',this.platformObj);
  }

  updateGenreObjFromSidebar(event:any){

    this.genreObj = event;
    //console.log('genreObj updated in main ',this.genreObj);
  }

  updateRelease_yearObjFromSidebar(event:any){

    this.release_yearObj = event;
    //console.log('release_yearObj updated in main ',this.release_yearObj);
  }

  updateEditors_choiceObjFromSidebar(event:any){

    this.editors_choiceObj = event;
    //console.log('editors_choiceObj updated in main ',this.editors_choiceObj);
  }
  searchText:string;
  updateSearchText(event:string){
    this.searchText=event;
  }

  ngOnDestroy(){
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
