import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-herum-toggle-button',
  templateUrl: './herum-toggle-button.component.html',
  styleUrls: ['./herum-toggle-button.component.scss', '../herum-button/herum-button.component.scss']
})
export class HerumToggleButtonComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() selectedOption: string = 'none';
  @Input() disabled: boolean = false;
  selectedOptionIndex: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOption(selectedOptionIndex: number) {
    this.selectedOption = this.options[selectedOptionIndex];
    this.selectedOptionIndex = selectedOptionIndex;
  }

  isOptionSelected(selectedOptionIndex: number) {
    return this.selectedOptionIndex === selectedOptionIndex;
  }

  isBorderNeeded(elementIndex: number){
    return elementIndex != this.options.length-1 && !this.isOptionSelected(elementIndex + 1) && !this.isOptionSelected(elementIndex);
  }
}
