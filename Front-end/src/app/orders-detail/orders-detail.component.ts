import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Order } from '../model/model.order';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.css']
})
export class OrdersDetailComponent implements OnInit {
  order$: Order;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
      this.route.params.subscribe(params => this.order$ = params.id);
   }

  ngOnInit() {
    this.http.get<Order>('orders/'+ this.order$)
    .subscribe(data =>{ this.order$=data;});
  }

  deleteOrder(orderId){
    if (confirm("Do you want to delete order?")){
    this.http.delete("orders/"+orderId).subscribe(data => {this.router.navigate(["/admin/orders"])});}
    else{}
  }
}
