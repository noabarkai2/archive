import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feed-collection-priority-expendable-panel',
  templateUrl: './feed-collection-priority-expendable-panel.component.html',
  styleUrls: ['./feed-collection-priority-expendable-panel.component.scss']
})
export class FeedCollectionPriorityExpendablePanelComponent implements OnInit {

  @Input() title: string = 'עדיפות גבוהה';
  isOpen: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
