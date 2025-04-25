import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number): string {
    // Convert the time value to a formatted string (e.g., mm:ss)
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);

    return `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }

  private padNumber(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
