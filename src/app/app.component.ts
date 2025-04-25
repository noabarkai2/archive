import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { pagesRouteWithoutHeader } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'herum';
  options: string[] = ['אביקס', 'אופיר2', 'כפתור', 'עמיאל', 'מרום'];
  isHeaderNeeded: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHeaderNeeded = !pagesRouteWithoutHeader.some(route => {
        return route == event.urlAfterRedirects
      });
    });
  }
}