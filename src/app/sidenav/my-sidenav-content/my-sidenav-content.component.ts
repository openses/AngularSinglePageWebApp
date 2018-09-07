import { Component, OnInit } from '@angular/core';
import {Globals} from '../../globals';

@Component({
  selector: 'app-my-sidenav-content',
  templateUrl: './my-sidenav-content.component.html',
  styleUrls: ['./my-sidenav-content.component.css']
})
export class MySidenavContentComponent implements OnInit {

  mySidenavContentData = 'XXXXXX';

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

}
