import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from '../../config/util';

@Component({
  selector: 'ngxb-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  title = 'NGX Blog';

  onActivate(event: any) {
    tap(event, 'Activate');
  }

  onDeactivate(event: any) {
    tap(event, 'Deactivate');
  }
  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {
        tap(event, 'event');
      });
  }
}
