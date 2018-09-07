import { Component, OnInit /* , Sanitizer */ } from '@angular/core';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
/* import {MySidenavContentLeftTab01Component} from '../my-sidenav-content-left/my-sidenav-content-left-tab01/my-sidenav-content-left-tab01.component';
import { MaterialModule } from '../../material';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { sanitizeHtml } from '@angular/core/src/sanitization/sanitization'; */
/* import {MySidenavControlService} from '../../my-sidenav-control.service'; */
import {Globals} from '../../globals';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-my-sidenav-content-left',
  templateUrl: './my-sidenav-content-left.component.html',
  styleUrls: ['./my-sidenav-content-left.component.css'],
  providers: [/* MySidenavControlService */]
})
export class MySidenavContentLeftComponent  implements OnInit {
  FalseTrueCheck = true;
  constructor(public globals: Globals) { }
  /* constructor(public _MySidenavControlService: MySidenavControlService) {} */


  // Tab01Check: boolean;
  // selectedTab: any;

 // tslint:disable-next-line:max-line-length
 /* constructor(public logger: MySidenavControlService) {
  this.selectedTab = logger.serviceVariableCheckTab;
  } */

  // MySidenavContentLeftComponentData = '<app-my-sidenav-content-left-tab01></app-my-sidenav-content-left-tab01>';



  /* constructor(protected sanitizer: DomSanitizer) {}
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
 */
ngOnInit(): void {
  /* this._MySidenavControlService.serviceVariableCheckTab = 'Tab01'; */
}


}
