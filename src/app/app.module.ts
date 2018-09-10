import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
// import { MySidenavContentComponent } from './sidenav/my-sidenav-content/my-sidenav-content.component';
// import { MySidenavContentLeftComponent } from './sidenav/my-sidenav-content-left/my-sidenav-content-left.component';
import { Globals } from './globals';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { AngularResizedEventModule } from 'angular-resize-event';
// tslint:disable-next-line:max-line-length
// die obige Kommentarzeile muss vor langen Zeilen stehen -> https://stackoverflow.com/questions/42693123/typescript-lint-error-exceeds-maximum-line-length-of-120


@NgModule({
  declarations: [
    AppComponent,
    // MySidenavContentComponent,
    // MySidenavContentLeftComponent,
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
