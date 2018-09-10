import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MySidenavControlService} from './my-sidenav-control.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Globals} from './globals';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { ResizedEvent } from 'angular-resize-event/resized-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MySidenavControlService]
})
export class AppComponent implements OnDestroy {
  title = 'openses';
  msg: any;
  mobileQuery: MediaQueryList;
  public selectedTab: any;
  width: number;
  height: number;
  FalseTrueCheck = false;
  private _mobileQueryListener: () => void;
  public myLog(msg: any) {console.log(msg); }

  onResized(event: ResizedEvent): void {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log(this.width);
    console.log(this.height);
  }

// tslint:disable-next-line:max-line-length
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public logger: MySidenavControlService, public globals: Globals) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => { changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener); };
    this.msg = logger.test_msg;
    logger.MySidenavControlServiceLog(this.msg);
    logger.MySidenavControlServiceLog(this.mobileQuery.matches ? 'mobileQuery: match' : 'mobileQuery:no match');
    this.selectedTab = globals.selectedTab;
    }

    private changedTab() {
      this.globals.selectedTab = this.selectedTab;
    }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  selectSidenavContentLeft(CheckTab: any) {this.selectedTab = CheckTab; }

}
