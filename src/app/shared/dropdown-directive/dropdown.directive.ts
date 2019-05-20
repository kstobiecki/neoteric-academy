import { Directive, HostListener, HostBinding, EventEmitter, ElementRef, Output } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private _elementRef: ElementRef) {
  }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;    
  }

  @HostListener('document:click') closeDropdown() {
    if(!this._elementRef.nativeElement.contains(event.target)){
     this.isOpen = false;
    }
  }
}
