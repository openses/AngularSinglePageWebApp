import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MySidenavControlService} from './my-sidenav-control.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Globals} from './globals';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { ResizedEvent } from 'angular-resize-event/resized-event';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MySidenavControlService]
})
export class AppComponent implements OnDestroy {
  title = 'openses';
 public myhtmlpath: any;
 // 'http://buerojacob.ch/openses-content/';
  public myhtmlfile: any;
  // 'openses_01_01.html';
  msg: any;
  mobileQuery: MediaQueryList;
  public selectedTab: any;
  public selectedLanguage: any;
  public selectedCommunity: any;
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
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public logger: MySidenavControlService, public globals: Globals, public sanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => { changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener); };
    this.msg = logger.test_msg;
    logger.MySidenavControlServiceLog(this.msg);
    logger.MySidenavControlServiceLog(this.mobileQuery.matches ? 'mobileQuery: match' : 'mobileQuery:no match');
    this.selectedTab = globals.selectedTab;
    this.myhtmlpath = globals.myhtmlpath;
    this.myhtmlfile = globals.myhtmlfile;
    this.selectedLanguage = globals.selectedLanguage;
    this.selectedCommunity = globals.selectedCommunity;
    }

    private changedTab() {
      this.globals.selectedTab = this.selectedTab;
      this.globals.myhtmlpath = this.myhtmlpath;
      this.globals.myhtmlfile = this.myhtmlfile;
      this.globals.selectedLanguage = this.selectedLanguage;
      this.globals.selectedCommunity = this.selectedCommunity;
    }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  selectSidenavContentLeft(CheckTab: any) {this.selectedTab = CheckTab; }

}
