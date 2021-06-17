import { Component, OnInit } from '@angular/core'; 
import { ClienteService } from '../../servicios/cliente.service';
import { NgForm } from "@angular/forms";
import { Clientearray } from "../../models/cliente";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(public clienteService:ClienteService) { }

  ngOnInit(): void {
   this.getclientes();
  }

  getclientes(){
    this.clienteService.getclientes().subscribe(
      res => {
        this.clienteService.clientear = res;
      },
      err => console.error(err)
    )
  }
}
