import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingComponent } from './app-routing.component';

const routes: Routes = [
  { path: '', component: AppRoutingComponent },
  { path: 'tabselect', component: AppRoutingComponent },
  { path: 'tabselect/:id', component: AppRoutingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {
  constructor() {
  }
}
