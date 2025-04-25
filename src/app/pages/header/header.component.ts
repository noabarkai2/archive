import { Component, OnInit } from '@angular/core';
import { routerLinksToRoles } from './routerLinksToRoles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routerLinksToRoles = routerLinksToRoles;

  constructor() { }
  
  ngOnInit(): void {  }

}