import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
  
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    AdminLoginComponent,
    WelcomepageComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
