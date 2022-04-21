import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistraClienteComponent } from './components/registra-cliente/registra-cliente.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistraClienteComponent,
    LoginComponent,
    MenuComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    AppRoutingModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
