import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MySidenavContentComponent } from './sidenav/my-sidenav-content/my-sidenav-content.component';
import { MySidenavContentLeftComponent } from './sidenav/my-sidenav-content-left/my-sidenav-content-left.component';
// tslint:disable-next-line:max-line-length
import { MySidenavContentLeftTab01Component } from './sidenav/my-sidenav-content-left/my-sidenav-content-left-tab01/my-sidenav-content-left-tab01.component';
// import { SafePipe } from './safe.pipe';
import { Globals } from './globals';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { AngularResizedEventModule } from 'angular-resize-event';




@NgModule({
  declarations: [
    AppComponent,
    MySidenavContentComponent,
    MySidenavContentLeftComponent,
    MySidenavContentLeftTab01Component
    /* SafePipe */
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularResizedEventModule
  ],
  providers: [ Globals ],
  bootstrap: [AppComponent]
})
export class AppModule {
  }
