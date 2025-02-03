import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { envrioment } from "../envrioment";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private authHeader: string | null = null;
    private urlLogin: string = envrioment.URL_API + '/login';
    private user: Usuario | null = null;

    constructor(private http: HttpClient, router: Router) {

    }

    login(userName: string, password: string) : Observable<any> {
        this.authHeader = 'Basic ' + btoa(`${userName}:${password}`);
        
        if(this.user === null)
            this.user = new Usuario();

        this.user.login = userName;
        this.user.senha = password;
        const headers = this.getAuthHeaders();      
        return this.http.get(this.urlLogin, {headers});
    }

    logout() {
        this.authHeader = null;
        this.user = null;
    }

    getAuthHeaders() {
     
        return new HttpHeaders(
            {
                "Authorization" :  this.authHeader || '',
                "Content-Type": "application/json",
                'Accept': 'application/json',
            });
      
    }
    isLoggedIn(){
        return this.authHeader !== null;
    }

    getUser() {
        return this.user;
    }

    setUser(data: any) {
        if(this.user !== null) {
            this.user.id = data.id;
            this.user.nome = data.nome;
        } 
    }
}