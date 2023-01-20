import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]'
})
export class MyHighlightDirective {

  constructor(
    private elem: ElementRef
    ) {
      this.elem.nativeElement.style.background = "yellow";
    }

}
