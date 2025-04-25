import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-herum-checkbox',
  templateUrl: './herum-checkbox.component.html',
  styleUrls: ['./herum-checkbox.component.scss']
})
export class HerumCheckboxComponent implements OnInit {

  @Input() type: 'checkbox' | 'indeterminate' = 'checkbox';
  @Input() isChecked: boolean = false;
  @Input() disabled: boolean = false;
  @Output() checked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.checked.emit(this.isChecked);
  }
}