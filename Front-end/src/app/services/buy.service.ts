import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { map } from 'rxjs/operators';
import { Order } from '../model/model.order';
import { Http } from '../../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  constructor(private http: HttpClient) {
   }

   buy(order: Order){
     return this.http.post("orders", order);
   }
}
