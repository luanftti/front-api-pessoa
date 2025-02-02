import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private authHeader: string | null = null;
    private urlLogin: string = 'localhost:8080/login'

    constructor(private http: HttpClient, router: Router) {

    }

    login(userName: string, password: string) : Observable<any> {
        this.authHeader = 'Basic ' + btoa(`${userName}:${password}`);
        const headers = this.getAuthHeaders();      
        return this.http.get(this.urlLogin + '/login', {headers});
    }

    logout() {
        this.authHeader = null;
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
}