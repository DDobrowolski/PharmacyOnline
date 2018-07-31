import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppComponent } from '../app.component';
import { User } from '../model/model.user';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AccService {

  constructor(public http: Http) { }

  createAccount(user:User){
    return this.http.post('/register', user)
    .pipe(map(resp=>resp.json()));
  }

  
}
