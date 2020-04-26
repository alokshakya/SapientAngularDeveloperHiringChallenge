import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  showSidenav:boolean=false;
  @Input() set showSidebar(show:boolean){
    this.showSidenav = show;
    //console.log('received event in sidebar showSidenav : '+this.showSidenav)
  }
  sortObj={};
  @Input() set getSortObj(obj:any){
    this.sortObj = obj;
    //console.log('received event in sidebar sortObj : '+this.sortObj)
  }
  @Output() updateSortObj = new EventEmitter<any>();
  platformObj={};
  @Input() set getPlatformObj(obj:any){
    this.platformObj = obj;
    //console.log('received event in sidebar platformObj : '+this.platformObj)
    //console.log('printing keys ', Object.keys(this.platformObj))
  }
  @Output() updatePlatformObj = new EventEmitter<any>();

  genreObj={};
  @Input() set getGenreObj(obj:any){
    this.genreObj = obj;
  }
  @Output() updateGenreObj = new EventEmitter<any>();
  release_yearObj={};
  @Input() set getRelease_yearObj(obj:any){
    this.release_yearObj = obj;
  }
  @Output() updateRelease_yearObj = new EventEmitter<any>();
  editors_choiceObj={};
  @Input() set getEditors_choiceObj(obj:any){
    this.editors_choiceObj = obj;
  }
  @Output() updateEditors_choiceObj = new EventEmitter<any>();
  liExpanded={
    sort:true,
    platform:true,
    genre:false,
    released_year:false,
    editors_choice:false
  };
  a:boolean=true;
  platformCondition:boolean=true;
  ngOnInit(): void {
  }

  toggleCollapse(val:string){
    this.liExpanded[val]= !this.liExpanded[val];
  }

  updateConditionSort(key,event){
    if(key == "ascending"){
      if(event.target.checked){
        this.sortObj['descending']=false;
        this.sortObj[key] = true;
      }
      else{
        this.sortObj['descending']=true;
        this.sortObj[key] = false;
      }
      
    }
    else if(key=="descending"){
      if(event.target.checked){
        this.sortObj['ascending']=false;
        this.sortObj[key] = true;
      }
      else{
        this.sortObj['ascending']=true;
        this.sortObj[key] = false;
      }
      
    }
    
    this.updateSortObj.emit(this.sortObj)
  }

  updateConditionPlatform(key,event){
    if(key == "Clear All"){
      this.platformObj[key] = event.target.checked;
      if(event.target.checked){// if Clear All selected deselect all
        for(let key in this.platformObj){
          if(key=="Clear All"){
            //do nothing
            continue;
          }
          else{
            //set others to false
            this.platformObj[key]=false;
          }
        }
      }
      
    }
    else{
      this.platformObj['Clear All']=false;
      this.platformObj[key] = event.target.checked;
    }
    
    //console.log('updated key '+key+' and value is '+event.target.checked);
    //emit event to main to know get the correct filtered results
    this.updatePlatformObj.emit(this.platformObj)
  }

  updateConditionGenre(key,event){
    if(key == "Clear All"){
      this.genreObj[key] = event.target.checked;
      if(event.target.checked){// if Clear All selected deselect all
        for(let key in this.genreObj){
          if(key=="Clear All"){
            //do nothing
            continue;
          }
          else{
            //set others to false
            this.genreObj[key]=false;
          }
        }
      }
      
    }
    else{
      this.genreObj['Clear All']=false;
      this.genreObj[key] = event.target.checked;
    }
    
    //console.log('updated key '+key+' and value is '+event.target.checked);
    //emit event to main to know get the correct filtered results
    this.updateGenreObj.emit(this.genreObj)
  }

  updateConditionRelease_year(key,event){
    if(key == "Clear All"){
      this.release_yearObj[key] = event.target.checked;
      if(event.target.checked){// if Clear All selected deselect all
        for(let key in this.release_yearObj){
          if(key=="Clear All"){
            //do nothing
            continue;
          }
          else{
            //set others to false
            this.release_yearObj[key]=false;
          }
        }
      }
      
    }
    else{
      this.release_yearObj['Clear All']=false;
      this.release_yearObj[key] = event.target.checked;
    }
    
    //console.log('updated key '+key+' and value is '+event.target.checked);
    //emit event to main to know get the correct filtered results
    this.updateRelease_yearObj.emit(this.release_yearObj)
  }

  updateConditionEditors_choice(key,event){
    if(key == "Clear All"){
      this.editors_choiceObj[key] = event.target.checked;
      if(event.target.checked){// if Clear All selected deselect all
        for(let key in this.editors_choiceObj){
          if(key=="Clear All"){
            //do nothing
            continue;
          }
          else{
            //set others to false
            this.editors_choiceObj[key]=false;
          }
        }
      }
      
    }
    else{
      this.editors_choiceObj['Clear All']=false;
      this.editors_choiceObj[key] = event.target.checked;
    }
    
    //console.log('updated key '+key+' and value is '+event.target.checked);
    //emit event to main to know get the correct filtered results
    this.updateEditors_choiceObj.emit(this.editors_choiceObj)
  }

}
