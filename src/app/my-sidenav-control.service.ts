// Beispiel Service wird in app.component.ts importiert
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySidenavControlService {

  public test_msg = 'Test Ausdruck 01';
  public serviceVariableCheckTab: any;

  public MySidenavControlServiceLog(msg: any) {console.log('Angeklickter Tab: ' + msg);
  console.log('Angular Service Beispiel:');
  console.log('Zeigt in der Konsole den in der Toolbar angeklickten Tab an');
  }

  constructor() {
   }
}
