import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  $onEdit: BehaviorSubject<string> = new BehaviorSubject<string>("");
  $currentHoveredRowIndex: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  constructor() { }

  setCurrentHoveredRowIndex(index: number) {
    this.$currentHoveredRowIndex.next(index);
  }

  getCurrentHoveredRowIndex() {
    return this.$currentHoveredRowIndex.asObservable();
  }

  resetCurrentHoveredRowIndex() {
    this.$currentHoveredRowIndex.next(-1);
  }
}