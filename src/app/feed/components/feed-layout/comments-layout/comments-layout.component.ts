import { Component, Input, OnInit } from '@angular/core';
import { ResourceComment } from 'src/app/models/Shared/ResourceComment';

@Component({
  selector: 'app-comments-layout',
  templateUrl: './comments-layout.component.html',
  styleUrls: ['./comments-layout.component.scss']
})
export class CommentsLayoutComponent implements OnInit {

  @Input() comments: ResourceComment[] = [];
  showComments: boolean = false;
  showNewComment: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getCommentsLength(){
    return this.comments?.length;
  }

  addComment(){}
  
  addNewComment(){}
}
