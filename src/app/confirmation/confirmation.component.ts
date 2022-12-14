import { CartService } from './../services/cart.service';
import { CheckoutComponent } from './../checkout/checkout.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {

  public product:any = [];
  public grandTotal: number;

  constructor(private cartService: CartService){}

  read:Date = new Date;

  ngOnInit(): void{
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

}





  
    
  




