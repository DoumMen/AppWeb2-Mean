import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from "./components/clientes/clientes.component";
import { SigninComponent } from "./components/signin/signin.component";
import { SignupComponent } from "./components/signup/signup.component";
import { MenulateralComponent } from './components/menulateral/menulateral.component'
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {path:'', redirectTo: '/signin',pathMatch: 'full'},
  {path: 'clientes', component: ClientesComponent,canActivate:[AuthGuard]},
  {path: 'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'menulateral',component: MenulateralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
