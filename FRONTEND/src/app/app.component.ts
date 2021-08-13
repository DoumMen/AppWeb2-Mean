
import { Component} from '@angular/core';
import { AutenticaService } from "./servicios/autentica.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor( public autenticaservice: AutenticaService){}
  title = 'FRONTEND';
}