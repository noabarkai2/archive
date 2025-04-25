import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'herum-chip',
  templateUrl: './herum-chip.component.html',
  styleUrls: ['./herum-chip.component.scss']
})
export class HerumChipComponent implements OnInit {

  @Input() title: string = '';
  @Output() remove = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  _onRemove(){
    this.remove.emit(true);
  }
}