import { Component, Input, OnInit } from '@angular/core';
import { RouterLinkToRole } from '../routerLinksToRoles';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  @Input() routerLinksToRoles: RouterLinkToRole[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
