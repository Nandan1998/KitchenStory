import { CartService } from './../services/cart.service';
import { ProductServiceService } from './../services/product-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

  public productList:any;
  constructor(private api : ProductServiceService, private cartService: CartService){}

  ngOnInit(): void {
      this.api.getProducts()
      .subscribe(res=>{
        this.productList = res;

        this.productList.forEach((a:any)=> {
          Object.assign(a,{quantity:1, total:a.price})
        });
      })
  }

  addtoCart(product: any){
    this.cartService.addtoCart(product);
  }

}
