import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { User } from '../model/model.user';
import { CartItem } from '../model/model.cartItem';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:any;
  private user: any;
  private cartItems = [];
  private cartSum: number = 0;
  private warn: string = "YOU CAN BUY ONLY 20 ITEMS AT ONCE!";
  removeImage:string="/assets/images/close.png";
  constructor(private http: HttpClient, public authService: AuthService) {
      this.authService.isLogged = JSON.parse(localStorage.getItem("isLogged"));
   }

  ngOnInit() {
    this.http.get('products')
    .subscribe((items) =>{ this.items=items;});
    this.cartSum.toFixed(2);
    if(localStorage.getItem("cart")!==null && localStorage.getItem("cart")!==undefined ){
    this.cartItems = JSON.parse(localStorage.getItem("cart"));
    this.cartSum = JSON.parse(localStorage.getItem("cartSum"));
  
    }
    else {}
 

    
  }
  addToCart(id:number, name: string, price: number, quant: number, imgurl: string){
    if(this.authService.isLogged){
    if(quant >0 && quant < 21 ){
    if(this.cartItems.filter(i => { return i.name == name }).length>0){
        let oldItem = this.cartItems.filter(i => { return i.name == name })[0];
        let index = this.cartItems.indexOf(oldItem);
        let item = this.cartItems[index];
        if(item.quant+quant>20){
          alert(this.warn);
        }
        else{
        item.quant = item.quant + quant;
        this.cartItems[index] = item;
        this.cartSum += price*quant;
        }
        
    }
    else{
    this.cartItems.push({id: id, name: name, price: price, quant: quant,imgurl: imgurl});
    this.cartSum += price*quant;
  }
  localStorage.setItem("cart", JSON.stringify(this.cartItems));
  localStorage.setItem("cartSum", JSON.stringify(this.cartSum));
    }
    else{
    alert(this.warn);}
  }
  else{
    alert("You have to sign in to buy something");
  }

}


deleteFromCart(name: string){
  if(confirm("Do you want to delete item?")){
    let itemToDelete = this.cartItems.filter(i => {return i.name === name})[0];
    let index = this.cartItems.indexOf(itemToDelete);
    this.cartItems.splice(index, 1);
    this.cartSum -= itemToDelete.quant*itemToDelete.price;
  }
  else{}
  localStorage.setItem("cart", JSON.stringify(this.cartItems));
  localStorage.setItem("cartSum", JSON.stringify(this.cartSum));
  if (this.cartSum<0.00){
    this.cartSum = 0.00;
  }
}


}
