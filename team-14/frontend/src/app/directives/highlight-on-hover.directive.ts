import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective {

  readonly highlightClass: string = 'highlight-element';

  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.classList.remove(this.highlightClass);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.elementRef.nativeElement.classList.add(this.highlightClass);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.elementRef.nativeElement.classList.remove(this.highlightClass);
  }

}
