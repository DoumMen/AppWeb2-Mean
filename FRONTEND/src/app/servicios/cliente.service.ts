import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientearray } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientear!: Clientearray[];
  URL_API = "http://localhost:3800/api/clientes";
   
  constructor(private http: HttpClient) { }

  getclientes(){
    return this.http.get<Clientearray[]>(this.URL_API);
  }
}
