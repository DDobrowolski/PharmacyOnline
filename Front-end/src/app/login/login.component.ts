import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../model/model.user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  credentials = {username: "", password: ""};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.logIn(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }
}
