import '../style/app.scss';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  ROUTER_DIRECTIVES
} from '@angular/router';

import {
  FooterComponent
} from './shared';

import {
  ProgressBarService,
  InitSpinner
} from './shared';


@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [],
  directives: [...ROUTER_DIRECTIVES, FooterComponent],
  template: `
    <md-progress-bar mode="indeterminate" *ngIf="progressBarService.showflag"
                   class="progress-bar-margins"></md-progress-bar>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit() {

  }
  constructor(
    public progressBarService: ProgressBarService,
    public initSpinner: InitSpinner) {

  }

  public ngAfterViewInit(): void {
    this.initSpinner.hide();
  }
}
