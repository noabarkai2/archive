import { Component, Input } from '@angular/core';

@Component({
  selector: 'herum-button',
  templateUrl: './herum-button.component.html',
  styleUrls: ['./herum-button.component.scss']
})
export class HerumButtonComponent {

  @Input() type: 'primary' | 'secondary' | 'ghost' = 'primary';
  @Input() size: 'fit' | 'small' | 'medium' = 'medium';
  @Input() disabled: boolean = false;

  constructor() { }

  getButtonClasses(){
    return {
      [`${this.type}`]: true,
      [`${this.size}`]: true,
    }
  }
}