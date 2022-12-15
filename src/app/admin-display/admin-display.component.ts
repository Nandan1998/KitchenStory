import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from '../model/product.model';
import { AdminProductService } from '../services/admin-product.service';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  products: Product[];

  constructor(private adminService:AdminProductService) {}

  ngOnInit(): void {
    this.adminService.getProducts().subscribe((products:Product[])=>{
      this.products = products;
    })
    
  }

}
