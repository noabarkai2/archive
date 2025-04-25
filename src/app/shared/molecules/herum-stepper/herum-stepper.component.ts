import { Component, Input, OnInit } from '@angular/core';
import { Step } from './step';
import { StepStatus } from './stepperStatus';

@Component({
  selector: 'herum-stepper',
  templateUrl: './herum-stepper.component.html',
  styleUrls: ['./herum-stepper.component.scss']
})
export class HerumStepperComponent implements OnInit {

  @Input() stepper: Step[] = [
    {
      index: 1,
      label: "פרטים",
      status: StepStatus.Complete,
    },
    {
      index: 2,
      label: "שיוך מארזים",
      status: StepStatus.Complete,
    },
    {
      index: 1,
      label: "הנוכחי",
      status: StepStatus.Current,
    },
    {
      index: 1,
      label: "סיכום",
      status: StepStatus.Incomplete,
    },
  ]

  constructor() { }

  ngOnInit(): void { }
}