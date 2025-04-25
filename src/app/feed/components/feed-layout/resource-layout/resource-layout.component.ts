import { Component, Input, OnInit } from '@angular/core';
import { ResourcePreview } from 'src/app/models/Previews/ResourcePreview';
import { Resource } from 'src/app/models/Resource/Resource';

@Component({
  selector: 'app-resource-layout',
  templateUrl: './resource-layout.component.html',
  styleUrls: ['./resource-layout.component.scss']
})
export class ResourceLayoutComponent implements OnInit {

  @Input() resource!: Resource;

  constructor() { }

  ngOnInit(): void {
  }

}
