import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[figBorderCard]", // modify "appBorderCard" name with your own name
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5"; // White
  private defaultColor: string = "#009688"; // Green
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    // DOM reference where the Directive push
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input("figBorderCard") borderColor: string; // With Alias ('figBorderCard')
  // @Input() figBorderCard: string; // Without Alias

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`; // Modify style by Method
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
