import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CartComponent } from './cart/cart.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';


const routes: Routes = [
  {path:'', component: WelcomepageComponent},
  {path:'customerlogin', component: LoginPageComponent},
  {path:'products', component: ProductsListComponent},
  {path:'adminlogin', component: AdminLoginComponent},
  {path:'admindashboard', component: AdminDashboardComponent},
  {path:'adminoptions', component: AdminOptionsComponent},
  {path:'cart', component: CartComponent},
  {path:'checkout', component: CheckoutComponent},
  {path:'confirmation', component: ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
