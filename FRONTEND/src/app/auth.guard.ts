import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutenticaService } from './servicios/autentica.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( private autenticaservice: AutenticaService,
    private router:Router){}

  canActivate(): boolean {
    if(this.autenticaservice.logeado()){
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }
  
}
