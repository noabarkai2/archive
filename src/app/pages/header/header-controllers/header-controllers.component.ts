import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { NotebookDialogComponent } from '../notebook-dialog/notebook-dialog.component';

@Component({
  selector: 'app-header-controllers',
  templateUrl: './header-controllers.component.html',
  styleUrls: ['./header-controllers.component.scss']
})
export class HeaderControllersComponent implements OnInit {

  roles = ["אלחוטן / 8200 / אלמוג / צפוני", "אלחוטן / 8200 / אלמוג / דרומי / פצן / לבנון / משבץ / לומד / מילואים / מישר"]
  showNotebook=false
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(NotebookDialogComponent, {
      restoreFocus: false,
      direction: 'ltr',
      width: '50vh',
      height: '70vh',
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }

  ngOnInit(): void {
  }

  preventMenuClose(event: any) {
    if (event.key != 'ArrowUp' || event.key != 'ArrowDown') {
      event.stopPropagation();
    }
  }

  // handleMenuKeydown(event: KeyboardEvent): void {
  //   if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
  //     event.preventDefault();
  //     console.log(event);
  //   }
  //   const quillEditor = document.querySelector('.ql-editor') as HTMLElement;
  //   if (quillEditor) {
  //     quillEditor.dispatchEvent(new KeyboardEvent('keydown', event));
  //   }
  // }
}
