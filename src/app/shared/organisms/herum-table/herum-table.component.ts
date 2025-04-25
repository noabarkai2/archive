import { Component, ElementRef, ViewChild } from '@angular/core';
import { ColDef, ColGroupDef, GridOptions, IAfterGuiAttachedParams, IDoesFilterPassParams, IFilterParams, ISelectCellEditorParams } from 'ag-grid-community';
import { HerumCheckboxComponent } from '../../atoms/herum-checkbox/herum-checkbox.component';
import { EditRowComponent } from './edit-row/edit-row.component';
import { TableService } from './table.service';
import {
  GridApi,
  GridReadyEvent,
  ICombinedSimpleModel,
  IDateFilterParams,
  SideBarDef,
  TextFilterModel,
} from 'ag-grid-community';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-quartz.css';
// import 'ag-grid-enterprise';
import { HttpClient } from '@angular/common/http';
import { YearFilter } from './year-filter.component';
import { PersonFilter } from './person-filter.component';
import { TDSetFilterComponent } from './td-set-filter.component';

export type rows = {
  collectionName: string,
  subject: string,
  creator: string,
  creationDate: string,
  resourceCount: number,
  watchTime: string,
}

@Component({
  selector: 'app-herum-table',
  templateUrl: './herum-table.component.html',
  styleUrls: ['./herum-table.component.scss'],
})
export class HerumTableComponent {

  // rowData: rows[] = [
  //   {
  //     collectionName: 'מארז 1',
  //     subject: 'נושא 1',
  //     creator: 'יוצר 1',
  //     creationDate: 'תאריך 1',
  //     resourceCount: 5,
  //     watchTime: 'זמן 1',
  //   },
  //   {
  //     collectionName: 'מארז 2',
  //     subject: 'נושא 2',
  //     creator: 'יוצר 2',
  //     creationDate: 'תאריך 2',
  //     resourceCount: 8,
  //     watchTime: 'זמן 2',
  //   },
  //   {
  //     collectionName: 'מארז 3',
  //     subject: 'נושא 3',
  //     creator: 'יוצר 3',
  //     creationDate: 'תאריך 3',
  //     resourceCount: 12,
  //     watchTime: 'זמן 3',
  //   }
  // ];

  // columnDefs: (ColDef<rows, any> | ColGroupDef<rows>)[] = [
  //   // { checkboxSelection: true, headerCheckboxSelection: true, },
  //   { headerName: 'שם המארז', field: 'collectionName', filter: 'agTextColumnFilter' },
  //   { headerName: 'נושא', field: 'subject',filter: 'agTextColumnFilter' },
  //   {
  //     headerName: 'יוצר', field: 'creator',
  //     cellEditor: 'agRichSelectCellEditor',
  //     singleClickEdit: true,
  //     cellEditorParams: {
  //       values: ['Male', 'Female'],
  //     },filter: 'agTextColumnFilter'
  //   },
  //   { headerName: 'תאריך יצירה', field: 'creationDate',filter: 'agTextColumnFilter' },
  //   {
  //     headerName: 'כמות משאבים', field: 'resourceCount',filter: 'agTextColumnFilter'
  //   },
  //   // {
  //   //   headerName: 'זמן צפייה משוער', field: 'watchTime',
  //   //   cellEditor: 'agSelectCellEditor',
  //   //   singleClickEdit: true,
  //   //   cellEditorParams: {
  //   //     values: [5, 8, 12],
  //   //   } as ISelectCellEditorParams,
  //   //   cellRenderer: EditRowComponent, cellRendererParams: {
  //   //     isRowHovered: false,
  //   //   }
  //   // },
  // ];

  // defaultColDef = {
  //   resizable: false,
  //   sortable: true,
  //   filter: true,
  //   flex: 1,
  //   minWidth: 100,
  //   maxWidth: 300,
  //   rowHeight: 20,
  //   // editable: true,
  // };

  // gridOptions: GridOptions<rows> = {
  //   rowSelection: 'multiple',
  //   rowMultiSelectWithClick: true,
  //   rowClassRules: {
  //     'selected-row': 'data.selected',
  //   },
  //   localeText: {
  //     filterOoo: "בחר ערך פילטור...",
  //     equals: "שווה ל",
  //     notEqual: "לא שווה",
  //     contains: "מכיל",
  //     notContains: "לא מכיל",
  //     startsWith: "מתחיל ב",
  //     endsWith: "נגמר ב",
  //     filter: "פילטור",
  //     applyFilter: "אשר פילטור",
  //     resetFilter: "אפס פילטור",
  //   },
  // };

  // frameworkComponents = {
  //   customCheckboxRenderer: HerumCheckboxComponent,
  // }

  // constructor(private tableService: TableService) { }

  // onGridReady(params: any) {
  //   params.api.sizeColumnsToFit();
  // }

  // onSelectionChanged(event: any) {
  //   const selectedRows = event.api.getSelectedRows();
  //   console.log('Selected Rows:', selectedRows);
  // }

  // onCellMouseOver(event: any) {
  //   this.tableService.setCurrentHoveredRowIndex(event.rowIndex);
  // }

  // onCellMouseOut(event: any) {
  //   this.tableService.setCurrentHoveredRowIndex(-1);
  // }

  public columnDefs: ColDef[] = [
    { field: 'athlete', minWidth: 150, filter: PersonFilter },
    { field: 'year', minWidth: 130, filter: TDSetFilterComponent },
    { field: 'country', minWidth: 150 },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
  };
  public rowData!: IOlympicData[];
  public themeClass: string =
    "ag-theme-quartz";

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }
}
var filterParams: IDateFilterParams = {
  comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split('/');
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};
let savedFilterModel:
  | TextFilterModel
  | ICombinedSimpleModel<TextFilterModel>
  | null = null;

export interface IOlympicData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}