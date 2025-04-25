import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'herum-multi-select',
  templateUrl: './herum-multi-select.component.html',
  styleUrls: ['./herum-multi-select.component.scss', '../herum-select/herum-select.component.scss']
})
export class HerumMultiSelectComponent {

  @Input() options!: string[];
  @Input() maxChips: number = 2;
  @Input() disabled: boolean = false;

  selectedOptions: string[] = [];

  selectedOptionIndex: number = -1;
  isDropdownOpen = false;

  @ViewChild('optionInput') optionInput!: ElementRef<HTMLInputElement>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  optionCtrl = new FormControl('');
  // filteredOptions: Observable<string[]>;
  isShowAll: boolean = false;

  constructor() { }

  ngOnInit() {
    window.addEventListener('click', (event) => this.closeDropdown(event));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value)
      this.options.push(value);

    event.chipInput!.clear();
    this.optionCtrl.setValue(null);
  }

  remove(option: any): void {
    console.log(option);
    const index = this.selectedOptions.indexOf(option);
    console.log(index);

    if (index >= 0){
      this.selectedOptions.splice(index, 1);
    }

  }

  select(option: string): void {
    if (this.selectedOptions.includes(option))
      return

    this.selectedOptions.push(option);
  }

  getLimitedList() {
    if (this.selectedOptions.length < this.maxChips)
      return this.selectedOptions;
    else
      return this.selectedOptions.slice(0, this.maxChips);
  }

  _getHiddenOptions(){
    return this.selectedOptions.slice(this.maxChips).join(',');
  }

  showAll() {
    this.isShowAll = !this.isShowAll;
  }

  isOptionSelected(option: string) {
    return this.selectedOptions.includes(option);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(event: MouseEvent) {
    if (!(event.target as HTMLElement).matches('.dropbtn')) {
      this.isDropdownOpen = false;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('click', (event) => this.closeDropdown(event));
  }
}