import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-herum-mat-select',
  templateUrl: './herum-mat-select.component.html',
  styleUrls: ['./herum-mat-select.component.scss']
})
export class HerumMatSelectComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() selectedOption: string = '';
  @Input() disabled: boolean = false;
  @Input() id: number = 0;
  yourFormControl = new FormControl();

  selectedOptionIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selected(a: any) {
    console.log(a);
  }

  remove(a: any) { }
  add(a: any) { }

  selectOption(optionIndex: number) {
    console.log("optionIndex");
    console.log(optionIndex);
    this.selectedOptionIndex = optionIndex;
    this.selectedOption = this.options[optionIndex];
  }

  isSelectedOption(optionIndex: number) {
    return this.selectedOptionIndex == optionIndex;
  }

}
