import { Injectable } from '@angular/core';
import { CartService } from './../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {


  constructor(private cartService: CartService) { }

}
