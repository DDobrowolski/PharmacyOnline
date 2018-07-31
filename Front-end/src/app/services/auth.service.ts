import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import { User } from '../model/model.user';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
   public isLogged = false;

  constructor(private http: HttpClient) {
  }

  logIn(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.isLogged=true;
            let logged = this.isLogged.toString();
            localStorage.setItem("isLogged", logged);
        } else {
            console.log("nie");
            this.isLogged = false;
        }
        return callback && callback();
    });

}

    logOut() {
      return this.http.post("/logout", {})
      .pipe(map((response: Response) =>{
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLogged');
        this.isLogged = false;
      }));
    }
}
