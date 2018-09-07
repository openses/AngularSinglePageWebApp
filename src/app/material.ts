import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule ({
  imports: [
    MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatGridListModule,
      MatFormFieldModule,
      MatSelectModule,
      MatListModule,
      MatExpansionModule,
      MatDatepickerModule,
      MatTabsModule
  ],
  exports: [
    MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatGridListModule,
      MatFormFieldModule,
      MatSelectModule,
      MatListModule,
      MatExpansionModule,
      MatDatepickerModule,
      MatTabsModule
  ],
})

export class MaterialModule {}
