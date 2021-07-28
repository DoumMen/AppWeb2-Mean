import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    alert("Hola clase");
  }
}
