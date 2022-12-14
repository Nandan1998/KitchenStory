import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { CartComponent } from './cart/cart.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { FilterPipe } from './shared/filter.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



  
@NgModule({
  declarations: [
    AppComponent, 
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    AdminLoginComponent,
    WelcomepageComponent,
    CartComponent,
    AdminDashboardComponent,
    AdminOptionsComponent,
    FilterPipe,
    CheckoutComponent,
    ConfirmationComponent,   
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { } 
