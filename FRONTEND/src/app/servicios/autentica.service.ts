import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AutenticaService {
  
  private URL = 'http://localhost:3800/api';

  constructor(private http: HttpClient, private router:Router) { }

  signup(user:any){
    return this.http.post<any>(this.URL+'/registro',user);
  }

  signin(user:any){
    return this.http.post<any>(this.URL+'/login',user);
  }

  logeado(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
