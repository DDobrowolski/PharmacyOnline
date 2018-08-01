import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { componentRefresh } from '../../../node_modules/@angular/core/src/render3/instructions';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-items-manage',
  templateUrl: './items-manage.component.html',
  styleUrls: ['./items-manage.component.css']
})
export class ItemsManageComponent implements OnInit {
  products: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get("products")
    .subscribe((products) => {this.products = products;});
  }
  deleteItem(itemId){
    if(confirm("Do you want to delete item?")){
   this.http.delete("products/"+itemId).subscribe(data => { this.ngOnInit(); }
  );}
    else{}
  }



}
