import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
  
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
