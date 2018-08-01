import { Component, OnInit } from '@angular/core';
import { BuyService } from '../services/buy.service';
import { Router } from '../../../node_modules/@angular/router';
import { Order } from '../model/model.order';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  order: Order = new Order();
  orderItems = [];
  orderSum: any;
  constructor(private buyService: BuyService, private router: Router) {
   }

  ngOnInit() {
    this.orderItems = JSON.parse(localStorage.getItem("cart"));
    this.orderSum = JSON.parse(localStorage.getItem("cartSum"));
    this.order.items = this.orderItems;
    this.order.sum = this.orderSum;
  }


  buy(){
    this.buyService.buy(this.order).subscribe(data =>{
    localStorage.removeItem("cart");
    localStorage.removeItem("cartSum");
    this.router.navigate(["/"]);
  });
}

}
