import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-sidenav-content-left-tab01',
  templateUrl: './my-sidenav-content-left-tab01.component.html',
  styleUrls: ['./my-sidenav-content-left-tab01.component.css']
})
export class MySidenavContentLeftTab01Component implements OnInit {

  mySidenavContentLeftDataTitel01 = 'Titel 01';
  mySidenavContentLeftDataBeschrieb01 = 'Beschrieb 01';
  mySidenavContentLeftDataEintrag01 = 'Eintrag 01';
  mySidenavContentLeftDataEintrag02 = 'Eintrag 02';

  constructor() { }

  ngOnInit() {
  }

}
