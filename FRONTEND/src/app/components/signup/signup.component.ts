import { Component, OnInit } from '@angular/core';
import { AutenticaService } from "../../servicios/autentica.service";
import {Router} from"@angular/router"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    nombre: '',
    email: '',
    clave: ''
  }
  constructor( public autenticaservice:AutenticaService,
    private router:Router) { }

  ngOnInit(): void {
  }

  signUp() {
    this.autenticaservice.signup(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/clientes']);
      },
      err => console.log(err)
    )
  }
}