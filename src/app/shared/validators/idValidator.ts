import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function validateIDNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (Validators.required(control) || !isValidIDNumber(value)) {
      return { invalidIDNumber: { value } };
    }
    return null;
  };
}

function isValidIDNumber(aId: number | string): boolean {
  const id_12_digits: number[] = [1, 2, 1, 2, 1, 2, 1, 2, 1];
  let id_num: string = aId.toString();
  id_num = '0'.repeat(9 - id_num.length) + id_num;

  let result: number = 0;
  for (let i = 0; i < 9; i++) {
    let num: number = parseInt(id_num[i]) * id_12_digits[i];
    num = num >= 10 ? Math.floor(num / 10) + (num % 10) : num;
    result += num;
  }

  return result % 10 === 0;
}
