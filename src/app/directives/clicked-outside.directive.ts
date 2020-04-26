import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickedOutside]'
})
export class ClickedOutsideDirective {

  constructor(private _eleRef: ElementRef) { }

  @Output()
  public clickedOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
    public onClick(targetElement) {
        const clickedInside = this._eleRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            //console.log('clicked outside from directive');
            this.clickedOutside.emit(null);
        }
    }

}
