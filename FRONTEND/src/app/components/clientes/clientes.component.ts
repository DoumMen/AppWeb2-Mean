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

  addCliente(form: NgForm) {
    if (this.validarcedula(form.value.cedula)) {
      if (form.value._id) {
        this.clienteService.actualizarCliente(form.value).subscribe(
          res => {
            console.log(res);
            this.resetForm(form);
          },
          err => console.error()
        )
      }
      else {
        this.clienteService.postcliente(form.value).subscribe(
          res => {
            console.log(res);
            this.resetForm(form);
          },
          err => console.error(err))
      }
    } else {
      alert("Campo cedula invalido");
    }
  }

eliminarCliente(id: string){
  if (confirm("Desea eliminar")){
    this.clienteService.eliminarCliente(id).subscribe(
    res => this.getclientes(),
    err => console.error(err));
    }
}

editarCliente(cliente: Clientearray){
  this.clienteService.selectedcliente = cliente;
}

resetForm(form: NgForm) {
  if (form) {
    form.reset();
    this.getclientes();
  }
} 

  validarcedula(ced: string): Boolean {
    var ctp = 0;
    var cti = 0;
    var suma = 0;
    var ds = 0;
    if (ced == null || ced.length != 10) {
      return false;
    }
    for (var i = 0; i < 9; i++) {
      if (i % 2 == 0) {
        cti = Number(ced.substr(i, 1)) * 2;
        if (cti > 9) cti -= 9;
        suma += cti;
      } else {
        ctp += Number(ced.substr(i, 1));
      }
    }
    suma += ctp;
    if (suma % 10 != 0) {
      ds = ((suma - (suma % 10)) + 10);
    } else { ds = suma; }
    if (Number(ced.substr(9, 1)) != (ds - suma)) {
      return false;
    }
    return true;
  }
}