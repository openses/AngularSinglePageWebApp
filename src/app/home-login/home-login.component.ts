import { Component} from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent {
  constructor(public auth: AuthenticationService) {}
}
