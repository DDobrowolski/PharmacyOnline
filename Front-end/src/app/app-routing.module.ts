import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BuyComponent } from './buy/buy.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';

const routes: Routes = [
  {path: '', component:ItemsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'buy', component:BuyComponent},
  {path: 'admin/orders', component:OrdersComponent},
  {path: 'admin/orders/1', component:OrdersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
