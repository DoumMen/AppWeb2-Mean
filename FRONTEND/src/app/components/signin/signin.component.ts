import { Component, ErrorHandler, OnInit } from '@angular/core';
import { AutenticaService } from "../../servicios/autentica.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user ={
    email:"",
    clave:""
  }
  constructor(public autenticaservice:AutenticaService,
    private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.autenticaservice.signin(this.user).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['/menulateral']);
      },
      err => {
        alert(err.error);}
    )
  }
}
