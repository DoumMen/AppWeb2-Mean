import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AutenticaService {
  
  private URL = 'http://localhost:3800/api';

  constructor(private http: HttpClient) { }

  signup(){

  }
}
