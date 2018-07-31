import { Component, OnInit } from '@angular/core';
import { User } from '../model/model.user';
import { AccService } from '../services/acc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  constructor(public accountService: AccService, public router: Router) { }

  ngOnInit() {
  }

  register(){
    this.accountService.createAccount(this.user).subscribe(data =>{
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
      this.errorMessage = "username already exists";
    })
  }

}
