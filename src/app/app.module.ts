import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login.component';
import { PessoaComponent } from './screens/pessoa/pessoa.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pessoa', component: PessoaComponent },
  // outras rotas
];

@NgModule({
  declarations: [AppComponent, LoginComponent, PessoaComponent],
  imports: [
    AppRoutingModule, 
    CommonModule, 
    HttpClientModule,
    FormsModule,
    PasswordModule,
    MessagesModule,
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [
    MessageService,
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }