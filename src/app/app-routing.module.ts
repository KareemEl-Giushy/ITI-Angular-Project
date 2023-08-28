import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { OrderDetailsComponent } from './components/Order/order-details/order-details.component';
import { ShoppingComponent } from './components/Shopping/shopping/shopping.component';
import { ShoppingDetailsComponent } from './components/Shopping-details/shopping-details/shopping-details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'order',component:OrderMasterComponent},
  {path:'detail/:id',component:OrderDetailsComponent},
  {path:'shop',component:ShoppingComponent},
  {path:'shop/:id',component:ShoppingDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
