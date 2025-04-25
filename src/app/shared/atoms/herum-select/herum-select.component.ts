import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-herum-select',
  templateUrl: './herum-select.component.html',
  styleUrls: ['./herum-select.component.scss'],
})
export class HerumSelectComponent implements OnInit {

  @Input() options: string[] = [];
  @Input() selectedOption: string = '';
  @Input() disabled: boolean = false;
  @Input() iconPath: string = '';
  @Input() title: string = '';

  selectedOptionIndex: number = -1;
  isDropdownOpen = false;

  constructor() { }

  ngOnInit() {
    window.addEventListener('click', (event) => this.closeDropdown(event));
  }

  toggleDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown(event: MouseEvent) {
    if (!(event.target as HTMLElement).matches('.internal')) 
      this.isDropdownOpen = false;
    
  }

  selected(a:any){
  }
  
  remove(a:any){}
  add(a:any){}
  
  selectOption(optionIndex: number){
    this.selectedOptionIndex = optionIndex;
    this.selectedOption = this.options[optionIndex];
  }
  
  isSelectedOption(optionIndex: number){
    return this.selectedOptionIndex == optionIndex;
  }

  ngOnDestroy() {
    window.removeEventListener('click', (event) => this.closeDropdown(event));
  }

  show(){
    return this.isDropdownOpen;
  }
}