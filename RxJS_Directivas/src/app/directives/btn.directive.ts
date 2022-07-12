import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtn]'
})
export class BtnDirective implements OnInit {

  @Input()
  bgColor = "#fcba03"

  @Input()
  textColor = '#000'

  @Input()
  width = '100'

  constructor(private el: ElementRef<HTMLButtonElement>) { }
  ngOnInit(): void {
    this.setColor()
    this.setWidth()
  }

  setColor() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.color = this.textColor;

  }

  setWidth() {
    this.el.nativeElement.style.padding = `1rem`;
    this.el.nativeElement.style.width = `${this.width}rem`;
  }


}
