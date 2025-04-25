import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'herum-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {

  @Input() options!: { name: string; id: string }[];
  @Output() selectOptionEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  _onSelect(option:any){
    this.selectOptionEmitter.emit(option.id);
  }
}
