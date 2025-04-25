import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TableService } from '../table.service';

@Component({
  selector: 'edit-row',
  templateUrl: './edit-row.component.html',
  styleUrls: ['./edit-row.component.scss']
})
export class EditRowComponent {

  @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();

  cell: any;
  isRowHovered = true;

  constructor(private tableService: TableService) { }

  agInit(cell: any): void {
    this.tableService.getCurrentHoveredRowIndex().subscribe((index) => {
      this.isRowHovered = index === cell.rowIndex;
    });
    this.cell = cell;
    console.log(cell);
  }

  _onEdit() {
    this.onEdit.emit(this.cell.value);
  }
}
