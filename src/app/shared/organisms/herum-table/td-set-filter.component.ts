import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IFilterAngularComp } from 'ag-grid-angular';
import {
  IDoesFilterPassParams,
  IFilterParams,
  RowNode,
} from 'ag-grid-community';
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { debounceTime, tap } from "rxjs/operators";

@Component({
  //   selector: "td-set-filter",
  //   standalone: true,
  //   imports: [FormsModule,CommonModule],
  templateUrl: "./td-set-filter.component.html",
  styleUrls: ['./td-set-filter.component.scss'],

})
export class TDSetFilterComponent implements IFilterAngularComp {
  private static readonly rowHeight: number = 28;

  private model!: Array<string>;
  private uniqueCheck!: object;
  private filterParams!: IFilterParams;
  private fieldId!: string;
  private filterList!: Array<string>;
  private ngUnsubscribe!: Subject<any>;

  isEverythingSelected!: boolean;
  containerHeight!: number;
  selectedValuesMap!: object;
  onFilterListChange$!: BehaviorSubject<string[]>;
  onFilterValuesChanged$!: Observable<string[]>;

  agInit(params: IFilterParams): void {
    this.filterParams = params;
    this.uniqueCheck = {};
    this.selectedValuesMap = {};
    this.filterList = new Array<string>();

    if (params.colDef.field !== undefined) {
      this.fieldId = params.colDef.field;
    }

    this.onFilterListChange$ = new BehaviorSubject<string[]>([]);
    this.ngUnsubscribe = new Subject<any>();

    this.onFilterValuesChanged$ = this.onFilterListChange$
      .pipe(
        debounceTime(250),
        tap(values => this.sortValues(values)),
        tap(values => this.setContainerHeight())
      );

    this.setUniqueValues();
    this.selectEverything();
  }

  setUniqueValues() {
    this.filterParams.rowModel.forEachNode((node: RowNode) => {
      if (!node.data)
        return;

      let value = node.data[this.fieldId];
      this.addUniqueValueIfMissing(value);
    });
  }

  toggleItem(value: string) {
    console.log('value', (value));
    console.log('selectedValuesMap.hasOwnProperty(item)', this.selectedValuesMap.hasOwnProperty(value));
    console.log('selectedValuesMap', this.selectedValuesMap);
    if ((this.selectedValuesMap as { [key: string]: number })[value]) {
      delete (this.selectedValuesMap as { [key: string]: number })[value];
    }
    else (this.selectedValuesMap as { [key: string]: number })[value] = 1;

    this.isEverythingSelected =
      Object.keys(this.selectedValuesMap).length === this.filterList.length;

    this.onFilterChanged();
  }

  toggleEverything() {
    this.isEverythingSelected = !this.isEverythingSelected;
    if (this.isEverythingSelected)
      this.selectEverything();
    else
      this.unselectEverything();

    this.onFilterChanged();
  }

  onNewRowsLoaded() {
    this.setUniqueValues();
  }

  isFilterActive(): boolean {
    return Object.keys(this.selectedValuesMap).length > 0 && !this.isEverythingSelected;
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    const node = params.node;
    if (!node.data) {
      return false;
    }

    const nodeValue = params.data[this.fieldId];
    if (!this.isValueValid(nodeValue)) {
      return false;
    }

    return Boolean((this.selectedValuesMap as { [key: string]: any })[nodeValue]);
  }

  getModel() {
    return this.model;
  }

  onFilterChanged() {
    this.filterParams.filterChangedCallback();
  }

  setModel(value: string) {
    this.unselectEverything();
    this.selectedValuesMap = { [value]: 1 };
    this.addUniqueValueIfMissing(value);
  }

  destroy() {
    this.ngUnsubscribe.complete();
  }

  private setContainerHeight() {
    this.containerHeight =
      this.filterList.length * TDSetFilterComponent.rowHeight;
  }

  private sortValues(values: string[]) {
    values.sort();
  }

  private selectEverything() {
    this.selectedValuesMap = this.filterList.reduce((acc, value) => ({ ...acc, [value]: 1 }), {} as { [key: string]: number });
    this.isEverythingSelected = true;
  }

  private unselectEverything() {
    this.selectedValuesMap = {} as { [key: string]: number };
    this.isEverythingSelected = false;
  }

  private addUniqueValueIfMissing(value: string) {
    if (!this.isValueValid(value))
      return;

    if ((this.uniqueCheck as { [key: string]: number })[value])
      return;

    this.filterList.push(value);
    this.onFilterListChange$.next([...this.filterList]);
    (this.uniqueCheck as { [key: string]: number })[value] = 1;
  }

  private isValueValid(value: string) {
    if (value === "" || value === undefined || value === null)
      return false;

    return true;
  }
}
