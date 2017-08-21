import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngxb-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'NGX Blog';
}
