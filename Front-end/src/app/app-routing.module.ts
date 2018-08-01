import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BuyComponent } from './buy/buy.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersDetailComponent } from './orders-detail/orders-detail.component';
import { ItemsManageComponent } from './items-manage/items-manage.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  {path: '', component:ItemsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'buy', component:BuyComponent},
  {path: 'admin/orders', component:OrdersComponent},
  {path: 'admin/orders/:id', component:OrdersDetailComponent},
  {path: 'admin/items', component:ItemsManageComponent},
  {path: 'admin/items/add', component:AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
