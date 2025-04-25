import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appConditionalFormControlName]'
})
export class ConditionalFormControlNameDirective {

  @Input('appConditionalFormControlName') set formControlName(value: string) {
    this.controlName = value;
    this.updateFormControlName();
  }

  private controlName!: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngControl: NgControl
  ) {}

  ngOnInit() {
    this.updateFormControlName();
  }

  private updateFormControlName() {
    if (this.controlName && this.ngControl) {
      this.renderer.setAttribute(this.el.nativeElement, 'formControlName', this.controlName);
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'formControlName');
    }
  }
}
