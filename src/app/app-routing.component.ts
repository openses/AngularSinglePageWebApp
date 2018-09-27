import { Component, OnInit } from '@angular/core';
import { Globals } from './globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-routing',
  templateUrl: './app-routing.component.html',
  styleUrls: ['./app-routing.component.css']
})
export class AppRoutingComponent implements OnInit {
  selectedLanguage: string;
  selectedTab: string;
  myhtmlfile: string;
  constructor(public globals: Globals, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
  }

  getParams(): void {
    // die folgende Zeile basiert auf der Route { path: 'tabselect/:selectedTab', component: AppRoutingComponent }
    // this.route.snapshot.paramMap.get('selectedTab')
    // und basiert auf der URL /tabselect/Tab01
    // die folgende Zeile basiert auf der Route { path: 'tabselect', component: AppRoutingComponent },
    // this.route.snapshot.queryParams['selectedTab']
    // und basiert auf der URL zB.
    // http://localhost:4200/tabselect?selectedLanguage=de&selectedTab=Tab02&myhtmlfile=openses_02_02.html
    if (this.route.snapshot.queryParams['selectedTab'] == null) {
      console.log('ohne ? Parameter');
      this.globals.selectedLanguage = 'de';
      console.log(this.globals.selectedLanguage);
      this.globals.selectedTab = 'Tab01';
      console.log(this.globals.selectedTab);
      this.globals.myhtmlfile = 'openses_01_00.html';
      console.log(this.globals.myhtmlfile);
    } else {
      console.log('mit ? Parameter');
      this.selectedLanguage = this.route.snapshot.queryParams['selectedLanguage'];
      this.selectedTab = this.route.snapshot.queryParams['selectedTab'];
      this.myhtmlfile = this.route.snapshot.queryParams['myhtmlfile'];
      console.log('?selectedLanguage = ' + this.selectedLanguage);
      console.log('?selectedTab = ' + this.selectedTab);
      console.log('?myhtmlfile = ' + this.myhtmlfile);
      this.globals.selectedLanguage = this.selectedLanguage;
      this.globals.selectedTab = this.selectedTab;
      this.globals.myhtmlfile = this.myhtmlfile;
    }
   }
}
