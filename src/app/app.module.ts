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
import { AppRoutingModule } from './app-routing.module';
import { AppRoutingComponent } from './app-routing.component';
// import { AppRoutingModule } from './/app-routing.module';
// tslint:disable-next-line:max-line-length
// die obige Kommentarzeile muss vor langen Zeilen stehen -> https://stackoverflow.com/questions/42693123/typescript-lint-error-exceeds-maximum-line-length-of-120
// import { RouterModule, Routes, ActivatedRoute } from '@angular/router';


/* const routes: Routes = [
  { path: '/test', component: AppComponent }
]; */


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    // MySidenavContentComponent,
    // MySidenavContentLeftComponent,
  ],
  exports: [ /* RouterModule */ ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularResizedEventModule,
    AppRoutingModule
    /* RouterModule.forRoot([]) */ /* ,
    AppRoutingModule */
  ],
  providers: [ Globals ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // public urlParameter: any ;

  /* constructor(private route: ActivatedRoute, public globals: Globals) {
  }
 */
    // getID(): void {
   // if (this.route.snapshot.paramMap.get('id') !== null) {
    // this.urlParameter = this.route.snapshot.paramMap.get('id');
    // this.globals.urlParameter = this.route.snapshot.paramMap.get('id');
   // }

  }
