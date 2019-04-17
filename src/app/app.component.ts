import { Component } from '@angular/core';
import {Login} from "./models/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginInfo:Login = {
      first_name:'Prachi',
      last_name:'Sharma',
      title:'Software Associate'
  };
}
