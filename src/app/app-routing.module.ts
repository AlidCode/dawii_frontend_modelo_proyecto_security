import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistraClienteComponent } from './components/registra-cliente/registra-cliente.component';
import { LoginComponent } from './auth/login.component';
import { IndexComponent } from './index/index.component';



const routes: Routes = [
  {path:"registraCliente", component:RegistraClienteComponent },

  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {


}
