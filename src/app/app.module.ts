import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { Globals } from './globals';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Hinweise zur nächsten Zeile: https://www.npmjs.com/package/angular-resize-event
import { AngularResizedEventModule } from 'angular-resize-event';
import { AppRoutingModule } from './app-routing.module';
import { AppRoutingComponent } from './app-routing.component';
import { HomeLoginComponent } from './home-login/home-login.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

// tslint:disable-next-line:max-line-length
// die obige Kommentarzeile muss vor langen Zeilen stehen -> https://stackoverflow.com/questions/42693123/typescript-lint-error-exceeds-maximum-line-length-of-120

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingComponent,
    HomeLoginComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  exports: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularResizedEventModule,
    AppRoutingModule
  ],
  providers: [ Globals,
    AuthenticationService,
    AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  }
