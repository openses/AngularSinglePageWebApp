import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { CookieLawModule } from 'angular2-cookie-law';


@NgModule ({
  imports: [
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatExpansionModule,
      MatTabsModule,
      MatMenuModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      LayoutModule,
      CookieLawModule
  ],
  exports: [
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatExpansionModule,
      MatTabsModule,
      MatMenuModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      LayoutModule,
      CookieLawModule
  ],
})

export class MaterialModule {}
