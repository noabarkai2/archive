import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => HerumInputFieldComponent),
  multi: true,
};
const defaultPlaceholder: string = 'הקלד/י...';

@Component({
  selector: 'herum-input-field',
  templateUrl: './herum-input-field.component.html',
  styleUrls: ['./herum-input-field.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class HerumInputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() type: 'number' | 'text' | 'search' = 'text';
  @Input() placeholder: string = defaultPlaceholder;
  @Input() disabled: boolean = false;
  @Input() formControlName: string = '';
  @Input() isValid: boolean = true;
  @Input() errorMsg: string = '';
  @Output() inputValueEmitter = new EventEmitter<string>();

  touched: boolean = false;
  isBlured: boolean = false;

  inputValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  clearInput() {
    this.inputValue = '';
    this.onChange(this.inputValue);
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputValue = value;
    this.onChange(this.inputValue);
    this.inputValueEmitter.emit(this.inputValue);
    this.touched = true;
  }

  // Implement ControlValueAccessor methods
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.inputValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  showErrors() {}

  setBlured() {
    this.isBlured = true;
  }
}
