import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';
import { OrderItem } from '../model/model.orderItem';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: OrderItem = new OrderItem();
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  addItem(){
     return this.http.post("/products", this.item).subscribe(data => {
       this.router.navigate(["/admin/items"]);
     });
  }
}
