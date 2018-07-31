import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
orders: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.orders = this.http.get("orders");
  }

  goToDetail(){
    alert("test");
  }
}
