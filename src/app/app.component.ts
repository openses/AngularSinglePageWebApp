import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import {MySidenavControlService} from './my-sidenav-control.service';
import {MediaMatcher, BreakpointObserver, BreakpointState, Breakpoints} from '@angular/cdk/layout';
import {Globals} from './globals';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { ResizedEvent } from 'angular-resize-event/resized-event';
import { DomSanitizer } from '@angular/platform-browser';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MySidenavControlService]
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'openses';
  today = new Date();
  jstoday = '';
  public myhtmlpath: any;
  public myhtmlfile: any;
  public myID: any;
  public selectedTab: any;
  public selectedLanguage: any;
  public selectedCommunity: any;
  msg: any;
  mobileQuery: MediaQueryList;
  width: number;
  width_max: number;
  height: number;
  FalseTrueCheck = false;
  public stateVar: any;
  private _mobileQueryListener: () => void;
  public myLog(msg: any) {console.log(msg); }

// tslint:disable-next-line:max-line-length
  constructor(public breakpointObserver: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public logger: MySidenavControlService, public globals: Globals, public sanitizer: DomSanitizer /*, public routertest: AppRoutingModule , private route: ActivatedRoute */) {
    this.mobileQuery = media.matchMedia('(max-width: 620px)');
    this._mobileQueryListener = () => { changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener); };
    this.msg = logger.test_msg;
    logger.MySidenavControlServiceLog(this.msg);
    logger.MySidenavControlServiceLog(this.mobileQuery.matches ? 'mobileQuery: match' : 'mobileQuery:no match');
    this.selectedTab = globals.selectedTab;
    this.myhtmlpath = globals.myhtmlpath;
    this.myhtmlfile = globals.myhtmlfile;
    this.myID = globals.myID;
    this.selectedLanguage = globals.selectedLanguage;
    this.selectedCommunity = globals.selectedCommunity;
    }

    onResized(event: ResizedEvent): void {
      this.width = event.newWidth;
      if (this.width >= 960) {this.width_max = 1024; } else {this.width_max = this.width ; }
      this.height = event.newHeight;
      this.height =  this.height;
      console.log(this.width);
      console.log(this.height);
      this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log(
            'Matches small viewport or handset in portrait mode'
          );
        }
      });
      this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.stateVar = JSON.stringify(state);
        console.log(this.stateVar);
      }
      );
    }

    private changedTab() {
      this.globals.selectedTab = this.selectedTab;
      this.globals.myhtmlpath = this.myhtmlpath;
      this.globals.myhtmlfile = this.myhtmlfile;
      this.globals.myID = this.myID;
      console.log(this.globals.myID);
      this.globals.selectedLanguage = this.selectedLanguage;
      console.log(this.globals.selectedLanguage);
      this.globals.selectedCommunity = this.selectedCommunity;
    }

    private loadHomeLoginUrl() {
      window.location.href = 'https://openses.org/homelogin';
    }

    private loadGitHubUrl() {
      window.location.href = 'https://github.com/openses';
    }


    ngOnInit() {
      // https://angular.io/api/common/formatDate
      this.jstoday = formatDate(this.today, 'dd.MM.yyyy', 'en', '' );
     }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  selectSidenavContentLeft(CheckTab: any) {this.selectedTab = CheckTab; }
}
