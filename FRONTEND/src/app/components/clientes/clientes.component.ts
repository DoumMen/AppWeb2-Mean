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
    if(form.value._id){
      this.clienteService.actualizarCliente(form.value).subscribe(
        res => {
          console.log(res);
          alert(res);
          this.resetForm(form);
        },
        err => console.error()
      )
     }
    else{
    this.clienteService.postcliente(form.value).subscribe(
      res => {console.log(res);
      this.resetForm(form);},
      err => console.error(err))
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

validarcedula(ced: string){

}
}
