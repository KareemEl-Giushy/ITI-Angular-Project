import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[ListBox]'
})
export class ListBoxDirective  {

  constructor( private eleRef:ElementRef) {

    // this.eleRef.nativeElement.style.border="2px solid"

 this.eleRef.nativeElement.style.boxShadow=" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px";


  }




}
