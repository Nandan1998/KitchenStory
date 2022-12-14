import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem:number=0;
  public searchTerm: string='';

  constructor(private cartService: CartService){}

  ngOnInit(): void {
      this.cartService.getProducts()
      .subscribe(res=>{
        this.totalItem = res.length;
      })
  }

  search(event){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }

}
