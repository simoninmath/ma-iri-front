import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[figBorderCard]",  // modify "appBorderCard" name with your own name
})

export class BorderCardDirective {
  constructor(private el: ElementRef) {  // DOM reference where the Directive push
    this.setHeight(180);
    this.setBorder("#f5f5f5");
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;  // Modify style by Method
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
