import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    username: string = '';
    password: string = '';
    messages: Message[] = [];

    constructor(private router: Router) {

    }

    onLogin(){

    }
}
