import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  constructor(private cartService: CartService){}

  public product:any = [];
  public grandTotal: number;

  ngOnInit(): void{
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  getData(val){
    console.log(val);
  }

}
