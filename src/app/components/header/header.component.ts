import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  @Output() clickedHideShow = new EventEmitter<boolean>();
  titlesArray=[];
  @Input() set getTitlesArray(ar:any){
    this.titlesArray = ar;
    console.log('received event in header titlesArray line 15 : ',this.titlesArray)
  }
  @Output() updateTitleSearchText = new EventEmitter<any>();
  ngOnInit(): void {
    this.initForm();
  }

  show:boolean=false;
  toggleSidebar(){
    this.show = !this.show;
    console.log('toggle in header called show: '+this.show);
    this.clickedHideShow.emit(this.show);
  }


  stateForm: FormGroup;

  showDropDown = false;

   initForm() {
    this.stateForm = this.fb.group({
      search: ''
    })
    this.stateForm.get('search').valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(val => {
      //emit event to main if form is empty to show all results
      if(val==''){
        this.updateTitleSearchText.emit(val);
      }
    });
  }

  selectValue(value) {
    this.stateForm.patchValue({"search": value});
    this.showDropDown = false;
    this.updateTitleSearchText.emit(value);
  }

  onEnter(){
    //send value to main on enter button clicked
    this.updateTitleSearchText.emit(this.getSearchValue());
  }
   
   closeDropDown(){
     if(this.showDropDown)
     this.showDropDown = false;
     console.log('called closeDropdown1 ',this.showDropDown);
   }
 
   openDropDown() {
     this.showDropDown = true;
     console.log('open dropdown called', this.showDropDown);
   }
 
   getSearchValue() {
     return this.stateForm.value.search;
   }

   ngOnDestroy(){
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
//vigorous-jang-jridd
//sandbox url