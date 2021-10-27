import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // add certain css class to the element when it's clicked, and remove the class after clicking again

  // isOpenBehav = false; UPDATE:
  // bind to class propety of that component(class is an arr of all classes) //open event
  @HostBinding('class.open') isOpenBehav = false;

  // @HostListener('click') toggleOpen() { //after click if T => F or if F => T
  //   this.isOpenBehav = !this.isOpenBehav;
  // }    UPDATE to click anywhere for closing dropdown:
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpenBehav = this.elRef.nativeElement.contains(event.target) ? !this.isOpenBehav : false;
  }

  constructor(private elRef: ElementRef) {}
};
// after this we just need to add appDropdown into main attributes for toggle in header and detail
