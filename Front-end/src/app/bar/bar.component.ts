import { Component, OnInit } from '@angular/core';
import { User } from '../model/model.user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  cartImage:string="/assets/images/cart.png";
  logoutImage:string="/assets/images/logout.png";
  logInImage:string="/assets/images/login.png";
  newAccImage:string="/assets/images/register.png";
  currentUser: User;
  isLogged:boolean = false;



  constructor(public authService: AuthService, public router: Router) {
    if(authService.isLogged ==true){
      this.isLogged=JSON.parse(localStorage.getItem('isLogged'));}
   }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut()
    .subscribe(
      data => {
        this.router.navigate(['/login']);
        localStorage.removeItem("cart");
      },
      error => {

        return "lul";
      }
    )

  }

}
